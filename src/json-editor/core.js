import $ from 'cash-dom'
import Context from './context.js'
import { getTypeName, checkData, getCountProperty, checkFontShortcut } from './libs/util.js'
import { defaultAddNodeOptions, TYPES } from './libs/assets.js'
import { iconSort, iconFold, iconType } from './assets/icons.js'

/**
 * json editor core class
 * @param {HTMLElement} $wrap
 * @param {object|array|string} src
 */

class JSONEditorCore {

  #el = {
    wrap: null,
    tree: null,
  }
  context

  constructor(wrap, src)
  {
    this.#el.wrap = $(wrap)
    this.replace(src)
  }

  #template(type, isRoot = false)
  {
    let str = `<li data-type="${type}" class="node${isRoot ? ' root' : ''}">`
    str += `<div class="node__body">`
    if (!isRoot) str += `<span draggable="true" class="sort">${iconSort}</span>`
    str += `<div class="type"><button type="button"></button></div>`
    if (type === TYPES.OBJECT || type === TYPES.ARRAY)
    {
      str += `<button type="button" class="fold">${iconFold}</button>`
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
    })
    this.#setEventFromNode($node)
    this.#el.tree = $('<ul/>')
    this.#el.tree.append($node)
    this.#el.wrap.append(this.#el.tree)
    return $node
  }

  #selectContextMenu($node, mode, type)
  {
    switch (mode)
    {
      case 'change-type':
        this.changeNodeType($node, type)
        break
      case 'insert':
        this.controlFold($node, true)
        this.addNode({
          target: $node,
          data: { key: '', value: '', type },
        })
        break
      case 'duplicate':
        this.duplicateNode($node)
        break
      case 'remove':
        this.removeNode($node)
        break
    }
  }

  #setResourceFromNode($node, opt)
  {
    const { key, value, type, open } = opt
    const isRoot = $node.hasClass('root')
    const $body = $node.children('.node__body')
    // type
    $body.find('.type > button').html(`<i class="type-icon type-icon--${type}">${iconType[type]}</i>`)
    // fold
    if (type === TYPES.OBJECT || type === TYPES.ARRAY)
    {
      this.controlFold($node, open)
    }
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

  #setEventFromNode($node)
  {
    const isRoot = $node.hasClass('root')
    // sort
    const $sort = $node.find('.sort')
    if (!!$sort.length)
    {
      $sort.on('dragstart', (e) => this.#onDragStart(e))
    }
    // type
    $node.find('.type > button').on('click', async e => {
      const $this = $(e.currentTarget)
      e.stopPropagation()
      if ($this.parent().hasClass('open'))
      {
        if (this.context) this.context.close()
      }
      else
      {
        if (this.context) this.context.close()
        this.context = new Context(this, $this.closest('.node'), isRoot)
        this.context.selectItem = ($node, mode, type) => this.#selectContextMenu($node, mode, type)
      }
    })
    // fold
    $node.find('.fold').on('click', e => {
      const $this = $(e.currentTarget)
      const $node = $this.closest('.node')
      this.controlFold($node)
    })
    // key name
    const $key = $node.find('.key > .label-field')
    if (!!$key.length)
    {
      $key.on('keydown', e => {
        if (e.keyCode === 13) return e.preventDefault()
        if (checkFontShortcut(e)) e.preventDefault()
      })
    }
    // value
    const $valueString = $node.find('.value > .type-string')
    if (!!$valueString.length)
    {
      $valueString.on('keydown', e => {
        if (checkFontShortcut(e)) e.preventDefault()
      })
    }
    const $valueSwitch = $node.find('.value > .type-boolean')
    if (!!$valueSwitch.length)
    {
      $valueSwitch.on('click', e => {
        const $this = $(e.currentTarget)
        const newValue = !$this.data('value')
        $this
          .data('value', newValue)
          .find('i').text(newValue.toString().toUpperCase())
      })
    }
  }
  #onDragStart(e)
  {
    const $handle = $(e.currentTarget)
    const $node = $handle.closest('.node')
    $node.addClass('drag-ghost')
    e.dataTransfer.setDragImage($node.get(0), 0, 0)
    console.log('#onDragStart()', e)
    // $node.on('dragmove', (e) => this.#onDragMove(e))
    // $handle.on('dragend', (e) => this.#onDragEnd(e))
  }
  #onDragMove(e)
  {
    console.log('#onDragMove()', e)
  }
  #onDragEnd(e)
  {
    const $node = $(e.currentTarget).closest('.node')
    $node.removeClass('drag-ghost')
    console.log('#onDragEnd()', e)
  }

  #getValue($node)
  {
    const type = String($node.data('type'))
    const $value = $node.find('& > .node__body > .value')
    switch (type)
    {
      case TYPES.OBJECT:
      case TYPES.ARRAY:
        return ''
      case TYPES.STRING:
        return $value.children('.type-string').text() || ''
      case TYPES.NUMBER:
        return Number($value.children('.type-number').val())
      case TYPES.BOOLEAN:
        return $value.children('.type-boolean').data('value')
      case TYPES.NULL:
        return null
    }
  }

  /**
   * replace
   * @param {object|array} src
   */
  replace(src)
  {
    this.clear()
    src = checkData(src)
    const $item = this.#createRoot(src)
    this.import($item, src)
  }

  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   */
  import(target, src)
  {
    $.each(src, (key, value) => {
      const type = getTypeName(value)
      const data = { key, value, type }
      this.addNode({
        target,
        data,
        open: false,
        callback: (node, value) => this.import(node, value),
      })
    })
  }

  /**
   * add node
   * @param {object} options
   */
  addNode(options)
  {
    options = { ...defaultAddNodeOptions, ...options }
    const { target, data, between, open, callback } = options
    const $target = $(target)
    const { key, value, type } = data
    // set node item
    const $node = this.#template(type, false)
    this.#setResourceFromNode($node, { ...data, open })
    this.#setEventFromNode($node)
    // add element
    const $ul = $target.find('& > .node__children > ul')
    if (between === 'before') $ul.prepend($node)
    else $ul.append($node)
    // callback
    if (type === 'array' || type === 'object')
    {
      if (callback && typeof callback === 'function')
      {
        callback($node.get(0), value)
      }
    }
  }

  changeNodeType(node, type)
  {
    const $node = $(node)
    // backup data
    const src = {
      key: $node.find(`& > .node__body .key`).text(),
      value: this.#getValue($node),
      type,
      open: $node.hasClass('open'),
    }
    const children = $node.find(`& > .node__children > .tree`).html()
    // clear
    $node.empty()
    // reset node
    $node.html(this.#template(type, false).html())
    if (children)
    {
      // console.log(children)
      $node.find(`& > .node__children > .tree`).html(children)
    }
    this.#setResourceFromNode($node, src)
    this.#setEventFromNode($node)
    $node.attr('data-type', type)
  }

  duplicateNode($target)
  {
    $target = $($target)
    const $node = $($target.get(0).outerHTML)
    this.#setEventFromNode($node)
    $target.after($node)
  }

  removeNode($node)
  {
    $node.remove()
  }

  controlFold(node, sw)
  {
    const $node = $(node)
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
    if (!this.#el.tree) return
    this.#el.wrap.empty()
  }

  destroy()
  {}

}

export default JSONEditorCore
