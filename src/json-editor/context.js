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
    this.#type = this.#el.node.data('type')
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
    function item(obj, parentType = undefined)
    {
      let str = `<ol>`
      for (let o in obj)
      {
        if (isRoot && parentType === 'change-type')
        {
          switch (obj[o].key)
          {
            case 'string':
            case 'number':
            case 'boolean':
            case 'null':
              continue
          }
        }
        let attr = ''
        let typeIcon = ''
        let buttonAttr = ''
        switch (obj[o].key)
        {
          case 'change-type':
            attr = ` class="dropdown"`
            buttonAttr = ' disabled'
            break
          case 'insert':
            attr = ` class="dropdown"`
            buttonAttr = ' disabled'
            break
          case 'duplicate':
            attr = ` class="duplicate"`
            if (isRoot) continue
            break
          case 'remove':
            attr = ` class="remove"`
            if (isRoot) continue
            break
          case 'object':
          case 'array':
          case 'string':
          case 'number':
          case 'boolean':
          case 'null':
            attr = ` class="type"`
            typeIcon = `<i class="type-icon type-icon--${obj[o].key}">${iconType[obj[o].key]}</i>`
            if (parentType === 'change-type')
            {
              if (obj[o].key === type) buttonAttr = ' disabled'
            }
            break
        }
        str += `<li${attr}>`
        str += `<button type="button"${buttonAttr}>`
        str += typeIcon
        str += `<em class="label">${obj[o].label}</em>`
        if (obj[o].key === 'change-type' || obj[o].key === 'insert')
        {
          str += `<span class="arrow">${iconArrow}</span>`
        }
        str += `</button>`
        if (obj[o].children?.length > 0)
        {
          str += `<div class="children">`
          str += item(obj[o].children, obj[o].key)
          str += `</div>`
        }
        str += `</li>`
      }
      str += `</ol>`
      return str
    }
    let str = `<nav class="context${isRoot ? ' is-root' : ''}">`
    str += item(src)
    str += `</nav>`
    return $(str)
  }

  #onClickItem(e)
  {
    const $this = $(e.currentTarget)
    // TODO
    console.log('#onClickItem()', $this)
    this.close()
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
    this.#parent.context = undefined
  }

}

export default Context
