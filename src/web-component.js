import { checkData } from './json-editor/libs/util.js'
import Core from './json-editor/core.js'
import css from './json-editor/assets/main.scss?inline'

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
        if (this.core)
        {
          this.core.replace(this.data, false)
        }
        break
      case 'theme':
        this.options.theme = newValue
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
    this.core = new Core(this.root, this.options)
    this.core.replace(this.data, true)
    this.core.preview = (src) => {
      this.data = src
      this.#event('update', { data: src })
    }
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {
    console.warn('disconnectedCallback()')
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

  #event(name, src)
  {
    this.dispatchEvent(new CustomEvent(name, {
      detail: src,
    }))
  }

}

export default JsonEditor
