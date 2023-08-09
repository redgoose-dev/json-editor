<i><Icon name={icon}/></i>
<span>{label}</span>

<script>
import Icon from '../assets/icon.svelte'

export let icon
export let label
</script>

<style lang="scss">
@use '../../assets/scss/mixins';

i {
  display: block;
  --icon-color: var(--color-base);
  --icon-size: 16px;
  --icon-stroke: 1.75;
}
span {
  display: block;
  flex: 1;
  font-size: 14px;
  font-weight: 700;
  color: var(--color-base);
  line-height: 1;
}
</style>