import { defaultNodeOptions } from '../libs/assets.js'
import { getTypeName, stringToElement } from '../libs/util.js'
import iconSort from '../assets/icons/icon-sort.svg?raw'
import iconFold from '../assets/icons/icon-fold.svg?raw'

class Node {

  #dom = {}
  #parent
  #options
  #data
  #type

  constructor(parent, src, options = {})
  {
    this.#parent = parent
    this.#options = Object.assign({}, defaultNodeOptions, options)
    this.#data = src
    this.#type = getTypeName(this.#data)
    // render
    this.#render()
    this.#renderBody()
    this.#renderChild()
  }

  #render()
  {
    if (!this.#data) return
    const template = document.createElement('template')
    template.innerHTML = `<div class="node">
      <div class="node__body"></div>
      <ul class="node__child"></ul>
    </div>`
    this.#dom.wrap = template.content.firstChild.cloneNode(true)
    this.#dom.body = this.#dom.wrap.querySelector('.node__body')
    this.#dom.child = this.#dom.wrap.querySelector('.node__child')
    this.#parent.appendChild(this.#dom.wrap)
    // TODO: set event
    // TODO: add children node
  }

  #renderBody()
  {
    let str = ''
    if (!this.#options.isRoot)
    {
      str += `<div class="sort">${iconSort}</div>`
    }
    str += `<button type="button" class="type">.type</button>`
    str += `<button type="button" class="fold">${iconFold}</button>`
    str += `<div class="key-name"><div contenteditable="true"></div></div>`
    str += `<em class="count">1212</em>`
    str += `<div class="value"><div contenteditable="true"></div></div>`
    this.#dom.body.innerHTML = str
    this.#dom.sort = this.#dom.body.querySelector('.sort')
    this.#dom.type = this.#dom.body.querySelector('.type')
    this.#dom.fold = this.#dom.body.querySelector('.fold')
    this.#dom.keyName = this.#dom.body.querySelector('.key-name')
    this.#dom.count = this.#dom.body.querySelector('.count')
    this.#dom.value = this.#dom.body.querySelector('.value')
    // set events
    if (this.#dom.type)
    {
      this.#dom.type.addEventListener('click', this.#onClickTypeButton)
    }
    if (this.#dom.fold)
    {
      this.#dom.fold.addEventListener('click', this.#onClickFoldButton)
    }
    if (this.#dom.keyName)
    {}
    if (this.#dom.value)
    {}
  }

  #renderChild()
  {
    // console.log(this.#dom.child)
  }

  #onClickTypeButton(e)
  {
    console.log('onClickTypeButton()', e.target)
  }

  #onClickFoldButton(e)
  {
    console.log('onClickFoldButton()', e.currentTarget)
  }

}

// TODO: 루트로 이벤트 보내기
// this.#options.root.dispatchEvent(new CustomEvent('json-editor', {
//   detail: { foo: 'bar' },
// }))

export default Node
