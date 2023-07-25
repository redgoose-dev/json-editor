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
  #context

  constructor(wrap, src)
  {
    this.#el.wrap = $(wrap)
    this.#context = new Context()
    this.replace(src)
  }

  #template(type, isRoot = false)
  {
    let str = `<li data-type="${type}" class="node">`
    str += `<div class="node__body">`
    if (!isRoot) str += `<span class="sort">${iconSort}</span>`
    str += `<button type="button" class="type"></button>`
    str += `<button type="button" class="fold">${iconFold}</button>`
    if (!isRoot) str += `<div class="field-label key" contenteditable="true"></div>`
    str += `<em class="count"></em>`
    if (!isRoot) str += `<div class="value"><div class="field-label" contenteditable="true" data-placeholder="empty"></div></div>`
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
    this.#setType($node, type)
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

  #setType($node, type)
  {
    const $type = $node.find('.type')
    $type.html(`<i class="type-icon type-icon--${type}">${iconType[type]}</i>`)
  }

  #setEventSort()
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
    $key.text(keyName)
  }

  #setValue($node, value)
  {
    const $key = $node.find('.value > div')
    $key.text(value)
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

  changeType(node, type)
  {
    const $node = $(node)
    $node.attr('data-type', type)
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
    this.#setFold($node, open)
    this.#setType($node, type)
    this.#setKeyName($node, key)
    this.#setCount($node, value)
    this.#setValue($node, value)

    // put texts
    // TODO
    $node.find('h3').text(`${type} = ${key} / ${value}`)
    // TODO: 값을 집어넣고 이벤트를 초기화한다.
    // TODO: ul에서 아이템을 추가한다.

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
