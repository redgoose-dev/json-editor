import $ from 'cash-dom'
import Context from './context.js'
import { getTypeName, checkData } from './libs/util.js'

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
    // set context
    this.#context = new Context()
    this.replace(src)
  }

  #template(type, isRoot = false)
  {
    let str = `<li data-type="${type}" class="node">\n`
    str += `<h3>${type}</h3>\n`
    str += `<div class="node__body">\n`
    if (!isRoot) str += `<div class="sort">.sort</div>\n`
    str += `<div class="type">.type</div>\n`
    str += `<div class="fold">.fold</div>\n`
    str += `<div class="key">.key</div>\n`
    str += `<em class="count">.count</em>\n`
    str += `<div class="value">.value</div>\n`
    str += `</div>\n`
    str += `<div class="node__children"><ul/></div>\n`
    str += `</li>`
    return $(str)
  }

  #createRoot(type)
  {
    this.#el.tree = $('<ul class="tree tree--root"/>')
    this.#el.tree.append(this.#template(type, true))
    this.#el.wrap.append(this.#el.tree)
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
    // if (mode === 'update') return
    src = checkData(src)
    const type = getTypeName(src)
    this.#createRoot(type)
    this.import(this.#el.tree.children(), src)
  }

  /**
   * import data
   * @param {HTMLElement} target
   * @param {object|array} src
   * @param {'before'|'after'} between
   */
  import(target, src, between = 'after')
  {
    const $target = $(target)
    const $children = $target.find('.node__children > ul')
    console.log('import', $children, src)
  }

  destroy()
  {
    // TODO
  }

}

export default JSONEditorCore
