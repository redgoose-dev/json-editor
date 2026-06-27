import { mount } from 'svelte'
import App from './app.svelte'
import './assets/scss/main.scss'

const app = mount(App, {
  target: document.getElementById('app'),
  props: {},
})

export default app
