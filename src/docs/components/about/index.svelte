<article class="about">
  <div class="about__wrap">
    <h1 class="about__logo">
      <i class="symbol"><LogoSymbol/></i>
      <i class="label"><LogoLabel/></i>
    </h1>
    <p class="about__description">{@html $_language.aboutDescription}</p>
    <section class="information">
      <h2>{$_language.aboutInformation}</h2>
      <ul>
        <li>GitHub: <a href="https://github.com/redgoose-dev/json-editor" target="_blank">https://github.com/redgoose-dev/json-editor</a></li>
        <li>Version: <strong>{version}</strong></li>
        <li>Author: <a href="https://redgoose.me" target="_blank">https://redgoose.me</a></li>
        <li>Feedback: <a href="https://github.com/redgoose-dev/json-editor/issues" target="_blank">https://github.com/redgoose-dev/json-editor/issues</a></li>
      </ul>
    </section>
  </div>
</article>

<script>
import pkg from '../../../../package.json'
import { _language } from '../../store/service.js'
import LogoSymbol from '../assets/logo-symbol.svelte'
import LogoLabel from '../assets/logo-label.svelte'

const version = pkg.version
</script>

<style lang="scss">
@import './index';
</style>
