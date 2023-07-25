import $ from 'cash-dom'
import { checkData } from './libs/util.js'
import Core from './core.js'
import css from './assets/main.scss?inline'

class JsonEditor extends HTMLElement {

  constructor()
  {
    super()
    this.attachShadow({
      mode: 'open',
    })

    const template = document.createElement('template')
    template.innerHTML = `<div class="json-editor"></div>`
    const style = new CSSStyleSheet()
    style.replaceSync(css)

    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.adoptedStyleSheets = [ style ]
    this.root = this.shadowRoot.childNodes[0]
    this.ready = false
    this.data = {}
  }

  static get observedAttributes()
  {
    return [ 'src', 'theme' ]
  }

  get props()
  {
    return {
      src: this.getAttribute('src'),
      theme: this.getAttribute('theme'),
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
          this.core.replace(this.data)
        }
        break
      case 'theme':
        // TODO
        break
    }
  }

  /**
   * mounted component
   */
  connectedCallback()
  {
    this.root.addEventListener('json-editor', this.#onRootEvent)
    this.core = new Core(this.root, this.data)
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
