<article class="about">
  <div class="about__wrap">
    <h1 class="about__logo">
      <i class="symbol"><LogoSymbol/></i>
      <i class="label"><LogoLabel/></i>
    </h1>
    <p class="about__description">
      “JSON Editor”는 웹브라우저에서 JSON 데이터를 편집하는 에디터입니다.<br/>
      텍스트 편집툴을 사용할 수 없거나 JSON 데이터를 손쉽게 다루기 위하여 만들어진 프로그램 입니다.<br/>
      이 에디터는 웹 프로젝트 컴포넌트에 삽입하여 사용할 수 있습니다.
    </p>
    <section class="information">
      <h2>Information</h2>
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
import LogoSymbol from '../assets/logo-symbol.svelte'
import LogoLabel from '../assets/logo-label.svelte'

const version = pkg.version
</script>

<style lang="scss">
@import './index';
</style>
