import Wrapper from './components/wrapper.js'
import Node from './components/node.js'

/**
 * JsonEditor web component class
 * author : redgoose
 * website : https://redgoose.me
 */

class JsonEditor extends HTMLElement {

  constructor()
  {
    super()
    this.attachShadow({
      mode: 'open',
    })
    const wrapper = new Wrapper()
    this.shadowRoot.appendChild(wrapper.node)
    this.shadowRoot.adoptedStyleSheets = wrapper.css
    this.root = this.shadowRoot.childNodes[0]
    this.ready = false
    this.data = {}
  }

  static get observedAttributes()
  {
    return [ 'src' ]
  }

  get props()
  {
    return {
      src: this.getAttribute('src'),
    }
  }

  /**
   * 속성값이 변경됐을때 호출되는 영역
   */
  attributeChangedCallback(name, oldValue, newValue)
  {
    if (oldValue === newValue) return
    switch (name)
    {
      case 'src':
        this.data = this.#updateSrc(newValue)
        if (this.ready) this.#render()
        break
    }
  }

  /**
   * mounted component
   */
  connectedCallback()
  {
    this.root.addEventListener('json-editor', this.#onRootEvent)
    this.#render()
    this.ready = true
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {
    this.root.removeEventListener('json-editor', this.#onRootEvent)
    console.warn('disconnectedCallback()')
  }

  adoptedCallback()
  {
    console.warn('adoptedCallback()')
  }

  #updateSrc(src)
  {
    try
    {
      if (typeof src === 'string')
      {
        return JSON.parse(src)
      }
      else if (Array.isArray(src))
      {
        return Object.assign([], src)
      }
      else if (typeof newValue === 'object')
      {
        return Object.assign([], src)
      }
      else
      {
        return {}
      }
    }
    catch(e)
    {
      console.error('ERROR JSON-EDITOR >', e.message)
    }
  }

  #render()
  {
    if (this.node) this.#clear()
    this.node = new Node(this.root, this.data, {
      isRoot: true,
      keyName: undefined,
    })
  }

  #clear()
  {
    this.root.innerHTML = ''
    delete this.node
  }

  #onRootEvent(e)
  {
    console.log('#onRootEvent', e)
  }

}

export default JsonEditor
