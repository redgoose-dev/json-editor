import $ from 'cash-dom'
import Context from './context.js'
import { getTypeName, checkData, getCountProperty } from './libs/util.js'
import { defaultAddNodeOptions } from './libs/assets.js'
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
    let str = `<li data-type="${type}" class="node">`
    str += `<div class="node__body">`
    if (!isRoot) str += `<span class="sort">${iconSort}</span>`
    str += `<div class="type"><button type="button"></button></div>`
    str += `<button type="button" class="fold">${iconFold}</button>`
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
    this.#setFold($node, true)
    this.#setType($node, type, true)
    this.#setCount($node, data)
    this.#el.tree = $('<ul class="root"/>')
    this.#el.tree.append($node)
    this.#el.wrap.append(this.#el.tree)
    return $node
  }

  #addNodeElement($target, $item, between)
  {
    switch (between)
    {
      case 'before':
        $target.prepend($item)
        break
      default:
        $target.append($item)
        break
    }
  }

  #setType($node, type, isRoot = false)
  {
    const $type = $node.find('.type')
    const $button = $type.children('button')
    $button.html(`<i class="type-icon type-icon--${type}">${iconType[type]}</i>`)
    $button.on('click', async e => {
      const $this = $(e.currentTarget)
      e.stopPropagation()
      if ($this.hasClass('open'))
      {
        if (this.context) this.context.close()
      }
      else
      {
        if (this.context) this.context.close()
        this.context = new Context(this, $this.closest('.node'), isRoot)
      }
    })
  }

  #setSort($node)
  {}

  #setFold($node, open)
  {
    const $fold = $node.find('.fold')
    this.controlFold($node, open)
    $fold.on('click', e => {
      const $this = $(e.currentTarget)
      const $node = $this.closest('.node')
      this.controlFold($node)
    })
  }

  #setKeyName($node, keyName)
  {
    const $key = $node.find('.key')
    let $item
    function onKeydown(e)
    {
      if (e.keyCode === 13) return e.preventDefault()
    }
    $item = $(`<div class="label-field" contenteditable="true" data-placeholder="empty">${keyName}</div>`)
    $item.on('keydown', onKeydown)
    if (!$item) return
    $key.empty().append($item)
  }

  #setValue($node, type, value)
  {
    const $key = $node.find('.value')
    let $item
    function onKeydown(e)
    {
      const $el = $(this)
      if (e.ctrlKey || e.metaKey)
      {
        switch(e.keyCode)
        {
          // ctrl+b
          case 66:
          case 98:
            e.preventDefault()
            break
          // ctrl+i
          case 73:
          case 105:
            e.preventDefault()
            break
          // ctrl+u
          case 85:
          case 117:
            e.preventDefault()
            break
        }
      }
    }
    function onChangeSwitch(e)
    {
      const $this = $(e.currentTarget)
      const newValue = !$this.data('value')
      $this
        .data('value', newValue)
        .find('i').text(newValue.toString().toUpperCase())
    }
    switch (type)
    {
      case 'string':
        $item = $(`<div class="label-field" contenteditable="true" data-placeholder="empty">${value}</div>`)
        $item.on('keydown', onKeydown)
        break
      case 'number':
        $item = $(`<input type="number" value="${value}" placeholder="0" class="label-field"/>`)
        break
      case 'boolean':
        $item = $(`<button type="button" data-value="${value}" class="label-switch"><span><i>${value.toString().toUpperCase()}</i></span></button>`)
        $item.on('click', onChangeSwitch)
        break
      case 'null':
        $item = $(`<em class="label-null">NULL</em>`)
        break
    }
    if (!$item) return
    $key.empty().append($item)
  }

  #setCount($node, src)
  {
    const $count = $node.find('.count')
    const count = getCountProperty(src)
    if (!isNaN(count)) $count.text(count)
  }

  clear()
  {
    if (!this.#el.tree) return
    this.#el.wrap.empty()
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
    const $target = $(target)
    $.each(src, (key, value) => {
      const type = getTypeName(value)
      const data = { key, value, type }
      this.addNode({
        target,
        data,
        between: 'after',
        open: false,
        callback: (node, value) => this.import(node, value),
      })
    })
  }

  /**
   * add node
   * @param {HTMLElement} target
   * @param {object} data
   * @param {'before'|'after'} between
   * @param {function} callback
   */
  addNode(options)
  {
    options = Object.assign({}, defaultAddNodeOptions, options)
    const { target, data, between, open, callback } = options
    const $target = $(target)
    const { key, value, type } = data
    // set node item
    const $node = this.#template(type)
    this.#setSort($node)
    this.#setFold($node, open)
    this.#setType($node, type)
    this.#setKeyName($node, key)
    this.#setCount($node, value)
    this.#setValue($node, type, value)
    // add node
    this.#addNodeElement($target.find('& > .node__children > ul'), $node, between)
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
    $node.attr('data-type', type)
    // TODO: 버튼 아이콘도 바꿔줘야한다.
  }

  duplicateNode()
  {}

  removeNode()
  {}

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

  destroy()
  {}

}

export default JSONEditorCore
