import $ from 'cash-dom'
import { iconArrow, iconType } from './assets/icons.js'

const tree = [
  {
    key : 'change-type',
    label: 'Change Type',
    children : [
      { key: 'object', label: 'Object' },
      { key: 'array', label : 'Array' },
      { key: 'string', label : 'String' },
      { key: 'number', label : 'Number' },
      { key: 'boolean', label : 'Boolean' },
      { key: 'null', label : 'Null' },
    ]
  },
  {
    key: 'insert',
    label : 'Insert',
    children : [
      { key : 'object', label : 'Object' },
      { key : 'array', label : 'Array' },
      { key : 'string', label : 'String' },
      { key : 'number', label : 'Number' },
      { key : 'boolean', label : 'Boolean' },
      { key : 'null', label : 'Null' },
    ]
  },
  { key: 'duplicate', label : 'Duplicate' },
  { key: 'remove', label : 'Remove' },
]

class Context {

  #parent
  #el = {
    node: undefined,
    type: undefined,
    dialog: undefined,
  }
  #type

  constructor(parent, $node, isRoot)
  {
    this.#parent = parent
    this.#el.node = $node
    this.#type = String(this.#el.node.data('type'))
    this.#el.type = this.#el.node.find('& > .node__body > .type')
    this.#el.type.addClass('open')
    this.#el.dialog = this.#template(tree, this.#type, isRoot)
    this.#el.dialog.on('click', e => e.stopPropagation())
    this.#el.dialog.find('button').on('click', e => this.#onClickItem(e))
    this.#el.type.append(this.#el.dialog)
    $(window).on('click.json-editor-context', e => this.close(e))
    $(window).on('keyup.json-editor-context', e => this.#onKeyupWindow(e))
  }

  #template(src, type, isRoot = false)
  {
    function item(obj, parentType)
    {
      let str = ''
      const { key, label, children } = obj
      if (isRoot)
      {
        switch (key)
        {
          case 'string':
          case 'number':
          case 'boolean':
          case 'null':
            if (parentType === 'change-type') return ''
            break
          case 'duplicate':
          case 'remove':
            return ''
        }
      }
      let attr = ''
      let typeIcon = ''
      let buttonAttr = ''
      switch (key)
      {
        case 'change-type':
          attr = ` class="dropdown"`
          buttonAttr = ' disabled'
          break
        case 'insert':
          if (['string', 'number', 'boolean', 'null'].indexOf(type) > -1) return ''
          attr = ` class="dropdown"`
          buttonAttr = ' disabled'
          break
        case 'duplicate':
          attr = ` class="duplicate"`
          buttonAttr = ' data-mode="duplicate"'
          break
        case 'remove':
          attr = ` class="remove"`
          buttonAttr = ' data-mode="remove"'
          break
        case 'object':
        case 'array':
        case 'string':
        case 'number':
        case 'boolean':
        case 'null':
          attr = ` class="type"`
          typeIcon = `<i class="type-icon type-icon--${key}">${iconType[key]}</i>`
          buttonAttr = ` data-mode="${parentType}" data-type="${key}"`
          if (parentType === 'change-type')
          {
            if (key === type) buttonAttr = ' disabled'
          }
          break
      }
      str += `<li${attr}>`
      str += `<button type="button"${buttonAttr}>`
      str += typeIcon
      str += `<em class="label">${label}</em>`
      if (key === 'change-type' || key === 'insert')
      {
        str += `<span class="arrow">${iconArrow}</span>`
      }
      str += `</button>`
      if (children?.length > 0)
      {
        str += `<div class="children">`
        str += items(children, key)
        str += `</div>`
      }
      str += `</li>`
      return str
    }
    function items(obj, parentType = undefined)
    {
      let str = `<ol>`
      for (let o in obj)
      {
        str += item(obj[o], parentType)
      }
      str += `</ol>`
      return str
    }
    let str = `<nav class="context${isRoot ? ' is-root' : ''}">`
    str += items(src)
    str += `</nav>`
    return $(str)
  }

  #onClickItem(e)
  {
    const $this = $(e.currentTarget)
    const mode = $this.data('mode')
    let type = String($this.data('type'))
    type = type === 'undefined' ? '' : type
    this.close()
    if (this.selectItem && typeof this.selectItem === 'function')
    {
      this.selectItem(this.#el.node, mode, type)
    }
  }

  #onKeyupWindow(e)
  {
    if (e.code === 'Escape') this.close()
  }

  close()
  {
    this.#el.type.removeClass('open')
    this.#el.dialog.remove()
    $(window).off('click.json-editor-context')
    $(window).off('keyup.json-editor-context')
    delete this.#parent.context
  }

}

export default Context
