import Core from '@json-editor/index.js'
import css from '@json-editor/assets/main.scss?inline'

class JsonEditor extends HTMLElement {

  constructor()
  {
    super()
    this.attachShadow({ mode: 'open' })
    const template = document.createElement('template')
    template.innerHTML = `<div id="json-editor"></div>`
    const style = new CSSStyleSheet()
    style.replaceSync(css)
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.adoptedStyleSheets = [ style ]
    this.root = this.shadowRoot.childNodes[0]
    this.ready = false
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
   * change attributes
   */
  attributeChangedCallback(name, oldValue, newValue)
  {
    if (oldValue === newValue) return
    switch (name)
    {
      case 'theme':
        this.options.theme = newValue
        if (this.core) this.core.options.theme = this.options.theme
        break
      case 'live':
        this.options.live = [ 'true', '1' ].includes(newValue)
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
    this.core.replace(JSON.parse(this.props.src), false)
    this.core.preview = (src) => {
      this.setAttribute('src', JSON.stringify(src))
      this.#event('update', { data: src })
    }
  }

  /**
   * unmounted component
   */
  disconnectedCallback()
  {
    // destroy core
    if (!this.core) return
    this.core.destroy()
    delete this.core
    // clear source
    this.root.innerHTML = ''
  }

  #event(name, src)
  {
    this.dispatchEvent(new CustomEvent(name, {
      detail: src,
    }))
  }

  /**
   * change src
   * @param {object|array} src
   */
  change(src)
  {
    this.setAttribute('src', JSON.stringify(src))
    this.core.replace(src, true)
  }

}

export default JsonEditor
