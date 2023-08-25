<i class="icon">
  <Icon name={icon}/>
</i>
<span class="label">{label}</span>
{#if dropdown}
  <i class="dropdown-icon">
    <Icon name="chevron-down"/>
  </i>
{/if}

<script>
import Icon from '../assets/icon.svelte'

export let icon
export let label
export let dropdown = false
</script>

<style lang="scss">
@use '../../assets/scss/mixins';

.icon {
  display: block;
  --icon-color: var(--color-base);
  --icon-size: 16px;
  --icon-stroke: 1.75;
}
.label {
  display: block;
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-base);
  line-height: 1;
}
.dropdown-icon {
  display: block;
  margin: 0 -4px 0 -2px;
  --icon-size: 16px;
  --icon-stroke: 2;
  --icon-color: var(--color-base);
}
</style>
