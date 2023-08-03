import { checkData } from './libs/util.js'
import Core from './core.js'
import css from './assets/main.scss?inline'

class JsonEditor extends HTMLElement {

  constructor()
  {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<div class="json-editor"></div>`
    const style = new CSSStyleSheet()
    style.replaceSync(css)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.adoptedStyleSheets = [ style ]
    this.root = this.shadowRoot.childNodes[0]
    this.ready = false
    this.data = {}
    this.options = {
      live: false,
      theme: 'system', // system,light,dark
    }
  }

  static get observedAttributes()
  {
    return [ 'src', 'theme', 'live' ]
  }

  get props()
  {
    return {
      src: this.getAttribute('src'),
      theme: this.getAttribute('theme'),
      live: this.getAttribute('live'),
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
        this.data = checkData(newValue)
        if (this.core) this.core.replace(this.data)
        break
      case 'theme':
        this.options.theme = [ 'system', 'light', 'dark' ].indexOf(newValue) > -1 ? newValue : 'system'
        if (this.core) this.core.options.theme = this.options.theme
        break
      case 'live':
        this.options.live = [ 'true', '1' ].indexOf(newValue) > -1
        if (this.core) this.core.options.live = this.options.live
        break
    }
  }

  /**
   * mounted component
   */
  connectedCallback()
  {
    this.root.addEventListener('json-editor', this.#onRootEvent)
    this.core = new Core(this.root, this.options)
    this.core.replace(this.data)
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {
    console.warn('disconnectedCallback()')
    // remove event
    this.root.removeEventListener('json-editor', this.#onRootEvent)
    // destroy core
    if (!this.core) return
    this.core.destroy()
    delete this.core
    // clear source
    this.root.innerHTML = ''
  }

  adoptedCallback()
  {
    console.warn('adoptedCallback()')
  }

  #onRootEvent(e)
  {
    console.log('#onRootEvent', e)
  }

}

export default JsonEditor
