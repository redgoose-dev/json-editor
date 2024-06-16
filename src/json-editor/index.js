import $ from 'cash-dom'
import Context from './context.js'
import { getTypeName, checkData, getCountProperty, checkFontShortcut, selectText, pastePlainText } from './libs/util.js'
import { defaultOptions, defaultAddNodeOptions, TYPES, DRAG_EVENT, DRAG_HOVER_NODE_CLASS, CONTEXT_EVENT } from './libs/assets.js'
import { iconSort, iconFold, iconType } from './assets/icons.js'
import lang from './libs/lang.js'

/**
 * json editor core class
 * @param {HTMLElement} $wrap
 * @param {object|array|string} src
 */

class JsonEditorCore {

  $
  el = { wrap: null, body: null, tree: null }
  options
  context
  #drag
  #changeInput = false
  lang = lang

  static foo = 'bar'

  constructor(wrap, options = {})
  {
    this.$ = $
    this.el.wrap = $(wrap)
    this.el.body = $(`<div class="json-editor"></div>`)
    this.options = new Proxy(Object.assign({}, defaultOptions, options), {
      get: (obj, prop) => (obj[prop]),
      set: this.#setOptions.bind(this),
    })
    this.updateLanguage()
    this.el.wrap.append(this.el.body)
    this.#changeTheme(this.options.theme)
    this.#changeEdit(this.options.edit)
    this.replace(options.node || {}, {}, false)
    this.#openNodesWithDepth(options.openDepth)
  }

  #setOptions(obj, prop, value)
  {
    obj[prop] = value
    switch (prop)
    {
      case 'theme':
        this.#changeTheme(value)
        break
      case 'edit':
        this.#changeEdit(value)
        break
    }
    return true
  }

  #changeTheme(theme)
  {
    theme = ([ 'system', 'light', 'dark' ].indexOf(theme) > -1) ? theme : 'system'
    this.el.body.attr('data-theme', theme)
  }

  #template(type, isRoot = false)
  {
    const { lang } = this
    let str = `<li data-type="${type}" class="node${isRoot ? ' root' : ''}">`
    str += `<div class="node__body">`
    if (!isRoot) str += `<div class="sort" title="${lang.nodeChangeSort}">${iconSort}</div>`
    str += `<div class="type"><button type="button" title="${lang.nodeContextMenu}"></button></div>`
    if (type === TYPES.OBJECT || type === TYPES.ARRAY)
    {
      str += `<button type="button" title="${lang.nodeFold}" class="fold">${iconFold}</button>`
    }
    if (!isRoot) str += `<div class="key"></div>`
    str += `<em class="count"></em>`
    if (!isRoot) str += `<div class="value"></div>`
    str += `</div>`
    str += `<div class="node__children"><ul class="tree"/></div>`
    str += `</li>`
    return $(str)
  }

  #createRoot(data)
  {
    const type = getTypeName(data)
    const $node = this.#template(type, true)
    this.#setResourceFromNode($node, {
      key: undefined,
      value: data,
      type,
      open: true,
      depth: 0,
    })
    this.#setEventFromNode($node)
    this.el.tree = $('<ul/>')
    this.el.tree.append($node)
    this.el.body.append(this.el.tree)
    return $node
  }

  #selectContextMenu($node, mode, type)
  {
    switch (mode)
    {
      case 'change-type':
        this.changeType($node, type)
        break
      case 'insert':
        this.fold($node, true)
        this.addNode($node, { key: '', value: '', type })
        break
      case 'duplicate':
        this.duplicate($node)
        break
      case 'remove':
        this.removeNode($node)
        break
    }
  }

  #setResourceFromNode($node, opt)
  {
    const { key, value, type, open, depth } = opt
    const isRoot = $node.hasClass('root')
    const $body = $node.children('.node__body')
    // type
    $body.find('.type > button').html(`<i class="type-icon type-icon--${type}">${iconType[type]}</i>`)
    // fold
    if (type === TYPES.OBJECT || type === TYPES.ARRAY)
    {
      this.fold($node, open)
    }
    // depth
    if (depth !== undefined) $node.attr('data-depth', depth)
    if (!isRoot)
    {
      // key name
      $body.find('.key').html(`<div class="label-field" contenteditable="true" data-placeholder="empty">${key}</div>`)
      // value
      const $value = $body.find('.value')
      let newValue
      switch (type)
      {
        case TYPES.STRING:
          $value.html(`<div contenteditable="true" data-placeholder="empty" class="label-field type-string">${String(value)}</div>`)
          break
        case TYPES.NUMBER:
          newValue = Number(value)
          if (isNaN(newValue)) newValue = 0
          $value.html(`<input type="number" value="${newValue}" placeholder="0" class="label-field type-number"/>`)
          break
        case TYPES.BOOLEAN:
          newValue = value === 'false' ? false : Boolean(value)
          $value.html(`<button type="button" data-value="${newValue}" class="label-switch type-boolean"><span><i>${newValue.toString().toUpperCase()}</i></span></button>`)
          break
        case TYPES.NULL:
          $value.html(`<em class="label-null type-null">NULL</em>`)
          break
      }
    }
    // count
    if (type === TYPES.OBJECT || type === TYPES.ARRAY)
    {
      const count = getCountProperty(value)
      if (!isNaN(count)) $body.find('.count').text(count)
    }
  }

  #getType($node)
  {
    return String($node.data('type'))
  }

  #getValue($node)
  {
    const type = this.#getType($node)
    const $value = $node.find('& > .node__body > .value')
    switch (type)
    {
      case TYPES.OBJECT:
      case TYPES.ARRAY:
        return ''
      case TYPES.STRING:
        return $value.children('.type-string').get(0).innerText || ''
      case TYPES.NUMBER:
        return Number($value.children('.type-number').val())
      case TYPES.BOOLEAN:
        return $value.children('.type-boolean').data('value')
      case TYPES.NULL:
        return null
    }
  }

  #updateTick()
  {
    if (!this.options.live) return
    this.el.wrap.get(0).dispatchEvent(new CustomEvent('update', {
      detail: this.#output(),
    }))
  }

  #output($node)
  {
    const nest = ($node, nodeType) => {
      let obj = nodeType === TYPES.ARRAY ? [] : {}
      const $nodes = $node.find('& > .node__children > ul > li')
      $nodes.each((idx, $node) => {
        if (!(nodeType === TYPES.ARRAY || nodeType === TYPES.OBJECT)) return true
        $node = $($node)
        const type = this.#getType($node)
        switch (type)
        {
          case TYPES.OBJECT:
          case TYPES.ARRAY:
            switch (nodeType)
            {
              case TYPES.ARRAY:
                obj.push(nest($node, type))
                break
              case TYPES.OBJECT:
                const key = $node.find('& > .node__body > .key').text()
                if (key) obj[key] = nest($node, type)
                break
            }
            break
          case TYPES.STRING:
          case TYPES.NUMBER:
          case TYPES.BOOLEAN:
          case TYPES.NULL:
            const value = this.#getValue($node)
            switch (nodeType)
            {
              case TYPES.ARRAY:
                obj.push(value)
                break
              case TYPES.OBJECT:
                const key = $node.find('& > .node__body > .key').text()
                if (key) obj[key] = value
                break
            }
            break
        }
      })
      return obj
    }
    $node = $($node)
    const $rootNode = ($node?.length > 0) ? $node : this.el.tree.children('.node')
    const type = this.#getType($rootNode)
    if ([ TYPES.OBJECT, TYPES.ARRAY ].includes(type))
    {
      return nest($rootNode, type)
    }
    else
    {
      return undefined
    }
  }

  #setNodeCount($node)
  {
    $node = $($node)
    const type = this.#getType($node)
    if (!(type === 'object' || type === 'array')) return
    const count = $node.find('& > .node__children > ul > li').length
    if (!isNaN(count)) $node.find('& > .node__body > .count').text(count)
  }

  #changeEdit(value)
  {
    if (value === 'all')
    {
      this.el.body.removeAttr('data-edit')
    }
    else
    {
      this.el.body.attr('data-edit', value)
    }
  }

  /**
   * depth 이하의 노드를 열어준다.
   * @param {number} depth
   */
  #openNodesWithDepth(depth = 0)
  {
    if (!(depth > 0)) return
    const $nodes = this.el.body.find('.node:not(.root)')
    let arr = []
    $nodes.each((i, el) => {
      if ($(el).data('depth') < depth) this.fold($(el), true)
    })
  }

  /**
   * NODE EVENTS
   */

  #setEventFromNode($node)
  {
    // sort
    const $sort = $node.find('.sort')
    if (!!$sort.length)
    {
      $sort.on(DRAG_EVENT.START, this.#onDragStart.bind(this))
    }
    // type
    $node.find('.type > button').on('click', async e => {
      e.stopPropagation()
      if (this.options.edit !== 'all') return
      const $this = $(e.currentTarget)
      if ($this.parent().hasClass('open'))
      {
        if (this.context) this.context.close()
      }
      else
      {
        if (this.context) this.context.close()
        const isRoot = $this.closest('.node').hasClass('root')
        this.context = new Context(this, $this.closest('.node'), isRoot)
        this.context.selectItem = ($node, mode, type) => this.#selectContextMenu($node, mode, type)
      }
    })
    // fold
    $node.find('.fold').on('click', e => {
      const $this = $(e.currentTarget)
      const $node = $this.closest('.node')
      this.fold($node)
    })
    // key name
    const $key = $node.find('.key > .label-field')
    if (!!$key.length)
    {
      $key
        .on('keydown', e => {
          if (this.options.edit !== 'all') return
          if (e.code === 'Enter') return e.preventDefault()
          if (checkFontShortcut(e)) return e.preventDefault()
        })
        .on('input', e => this.#onInputTextField(e))
        .on('blur', e => this.#onBlurTextField(e))
      if (this.options.edit !== 'all')
      {
        $key.on('dblclick', selectText)
      }
      else
      {
        $key.on('paste', pastePlainText)
      }
    }
    // value
    const $valueString = $node.find('.value > .type-string')
    if (!!$valueString.length)
    {
      $valueString
        .on('keydown', e => {
          if (this.options.edit === 'none') return
          if (checkFontShortcut(e)) return e.preventDefault()
        })
        .on('input', e => this.#onInputTextField(e))
        .on('blur', e => this.#onBlurTextField(e))
      if (this.options.edit === 'none')
      {
        $valueString.on('dblclick', selectText)
      }
      else
      {
        $valueString.on('paste', pastePlainText)
      }
    }
    const $valueNumber = $node.find('.value > .type-number')
    if (!!$valueNumber.length)
    {
      $valueNumber
        .on('keydown', e => {
          if (this.options.edit === 'none') e.preventDefault()
        })
        .on('input', e => this.#onInputTextField(e))
        .on('blur', e => this.#onBlurTextField(e))
    }
    const $valueSwitch = $node.find('.value > .type-boolean')
    if (!!$valueSwitch.length)
    {
      $valueSwitch.on('click', e => {
        if (this.options.edit === 'none') return
        const $this = $(e.currentTarget)
        const newValue = !$this.data('value')
        $this
          .data('value', newValue)
          .find('i').text(newValue.toString().toUpperCase())
        this.#updateTick()
      })
    }
  }
  #onInputTextField()
  {
    this.#changeInput = true
  }
  #onBlurTextField()
  {
    if (this.#changeInput)
    {
      this.#updateTick()
      this.#changeInput = false
    }
  }
  #onDragStart(e)
  {
    // if (e.pointerType === 'touch') return
    this.#drag = {}
    this.#drag.$node = $(e.currentTarget).closest('.node')
    this.#drag.$area = this.#drag.$node.parent()
    this.#drag.$nodes = this.#drag.$area.children('.node')
    if (this.#drag.$nodes.length < 2)
    {
      this.#drag = undefined
      return
    }
    // on events
    this.#drag.$nodes.on(DRAG_EVENT.MOVE, this.#onDragMove.bind(this))
    $(window).on(DRAG_EVENT.END, this.#onDragEnd.bind(this))
  }
  #onDragMove(e)
  {
    let $node
    if (e.pointerType === 'touch')
    {
      const { clientX, clientY } = e
      const selectedNode = document.elementFromPoint(clientX, clientY).closest('.node')
      const isSameArea = this.#drag.$nodes.get().includes(selectedNode)
      if (!isSameArea) return
      $node = $(selectedNode)
    }
    else
    {
      $node = $(e.currentTarget)
    }
    const $body = $node.children('.node__body')
    if (!($body.length > 0)) return
    // check half
    const { y, height } = $body.get(0).getBoundingClientRect()
    const checkHalf = height * .5 < e.y - y
    if (!this.#drag.activeNode)
    {
      // set class
      this.el.body.addClass('dragging')
      this.#drag.$area.addClass('drag-area')
      this.#drag.$node.addClass('drag-select')
    }
    if (this.#drag.activeNode !== $node.get(0))
    {
      // remove class
      if (this.#drag.activeNode)
      {
        $(this.#drag.activeNode).removeClass(DRAG_HOVER_NODE_CLASS.ALL)
      }
      this.#drag.activeNode = $node.get(0)
    }
    else if (this.#drag.half === checkHalf)
    {
      return
    }
    this.#drag.half = checkHalf
    $node
      .removeClass(DRAG_HOVER_NODE_CLASS.ALL)
      .addClass(checkHalf ? DRAG_HOVER_NODE_CLASS.END : DRAG_HOVER_NODE_CLASS.START)
  }
  #onDragEnd()
  {
    // remove class
    this.el.body.removeClass('dragging')
    this.#drag.$area.removeClass('drag-area')
    this.#drag.$node.removeClass('drag-select')
    this.#drag.$nodes.removeClass(DRAG_HOVER_NODE_CLASS.ALL)
    // off events
    this.#drag.$nodes.off(DRAG_EVENT.MOVE)
    $(window).off(DRAG_EVENT.END)
    // transfer data
    if (this.#drag.half)
    {
      this.#drag.$node.insertAfter(this.#drag.activeNode)
    }
    else
    {
      this.#drag.$node.insertBefore(this.#drag.activeNode)
    }
    // clear properties
    this.#drag = undefined
    // call update
    this.#updateTick()
  }

  /**
   * PUBLIC METHODS
   */

  /**
   * add node
   * @param {HTMLElement} $target
   * @param {object} data
   * @param {object} options
   * @param {boolean} useUpdate
   * @param {boolean} useUpdateCount
   */
  addNode($target, data, options = {}, useUpdate = true, useUpdateCount = true)
  {
    options = { ...defaultAddNodeOptions, ...options }
    const { open, callback } = options
    $target = $($target)
    const type = (data.type === undefined) ? getTypeName(data.value) : data.type
    // set node item
    const $node = this.#template(type, false)
    this.#setResourceFromNode($node, {
      ...data,
      open,
      type,
      depth: $target.data('depth') + 1,
    })
    this.#setEventFromNode($node)
    // add element
    const $ul = $target.find('& > .node__children > ul')
    $ul.append($node)
    // set node count
    if (useUpdateCount) this.#setNodeCount($target)
    // callback
    if (type === TYPES.ARRAY || type === TYPES.OBJECT)
    {
      if (callback && typeof callback === 'function')
      {
        callback($node.get(0), data.value)
      }
    }
    if (useUpdate) this.#updateTick()
  }

  /**
   * remove node
   * @param {HTMLElement} $node
   * @param {boolean} useUpdate
   */
  removeNode($node, useUpdate = true)
  {
    $node = $($node)
    const $parentNode = $node.parent().closest('.node')
    $node.remove()
    this.#setNodeCount($parentNode)
    if (useUpdate) this.#updateTick()
  }

  /**
   * change type
   * @param {HTMLElement} node
   * @param {'object'|'array'|'string'|'number'|'boolean'|'null'} type
   * @param {boolean} useUpdate
   */
  changeType(node, type, useUpdate = true)
  {
    const $node = $(node)
    // backup data
    const src = {
      key: $node.find(`& > .node__body .key`).text(),
      value: this.#getValue($node),
      type,
      open: $node.hasClass('open'),
      depth: $node.data('depth'),
    }
    const children = $node.find(`& > .node__children > .tree`).html()
    const isRoot = $node.hasClass('root')
    // clear
    $node.empty()
    // reset node
    $node.html(this.#template(type, isRoot).html())
    if (children)
    {
      $node.find(`& > .node__children > .tree`).html(children)
    }
    this.#setResourceFromNode($node, src)
    this.#setEventFromNode($node)
    $node.attr('data-type', type)
    if (useUpdate) this.#updateTick()
  }

  changeKey(node, keyword)
  {
    const $node = $(node)
    $node.find('.key > div').text(keyword)
    this.#updateTick()
  }

  changeValue(node, value)
  {
    const $node = $(node)
    $node.find('.value > div').text(value)
    this.#updateTick()
  }

  /**
   * duplicate
   * @param {HTMLElement} $target
   * @param {boolean} useUpdate
   */
  duplicate($target, useUpdate = true)
  {
    $target = $($target)
    const $node = $($target.get(0).outerHTML)
    this.#setEventFromNode($node)
    $target.after($node)
    this.#setNodeCount($target.parent().closest('.node'))
    if (useUpdate) this.#updateTick()
  }

  /**
   * fold node
   * @param {HTMLElement} $node
   * @param {boolean} sw
   */
  fold($node, sw)
  {
    $node = $($node)
    if (sw === undefined)
    {
      $node.toggleClass('open')
    }
    else if (sw === true)
    {
      $node.addClass('open')
    }
    else
    {
      $node.removeClass('open')
    }
  }

  clear()
  {
    if (!this.el.tree) return
    this.el.body.empty()
    this.replace({}, {}, false)
    this.#updateTick()
  }

  destroy()
  {
    $(window)
      .off(DRAG_EVENT.END)
      .off(CONTEXT_EVENT.CLICK)
      .off(CONTEXT_EVENT.KEYUP)
    this.el.wrap.empty()
  }

  /**
   * replace
   * @param {object|array} data
   * @param {object} options
   * @param {boolean} useUpdate
   */
  replace(data, options = {}, useUpdate = true)
  {
    this.el.body.empty()
    data = checkData(data)
    const $item = this.#createRoot(data)
    this.import($item, data, false, false)
    if (useUpdate) this.#updateTick()
    if (options?.openDepth) this.#openNodesWithDepth(options?.openDepth)
  }

  /**
   * import data
   * @param {HTMLElement} $target
   * @param {object|array} data
   * @param {boolean} useUpdate
   * @param {boolean} useUpdateCount
   */
  import($target, data, useUpdate = true, useUpdateCount = true)
  {
    $target = $($target)
    $.each(data, (key, value) => {
      const data = { key, value }
      const options = {
        open: false,
        callback: (node, value) => this.import(node, value, false, false),
      }
      this.addNode($target, data, options, false, false)
    })
    if (useUpdateCount) this.#setNodeCount($target)
    if (useUpdate) this.#updateTick()
  }

  /**
   * export
   * @param {HTMLElement} $node
   * @param {boolean} json
   * @param {number|boolean} space (number: space count, true: tab, false: 0)
   * @return {array|object}
   */
  export($node = undefined, json, space = 2)
  {
    let data = this.#output($node)
    if (json)
    {
      let useSpace = 2
      if (space === true) useSpace = '\t'
      else if (typeof space === TYPES.NUMBER) useSpace = space
      return JSON.stringify(data, null, useSpace)
    }
    else
    {
      return data
    }
  }

  /**
   * update language
   * for prototype
   */
  updateLanguage() {}

}

export default JsonEditorCore
