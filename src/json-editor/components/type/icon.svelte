{#if name === 'object'}
  <svg viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="object">
    <g transform="translate(0 1)">
      <path d="M2.296 5.166C2.296 7.238 3.78 8.162 5.166 8.162C6.538 8.162 8.022 7.238 8.022 5.166C8.022 3.094 6.538 2.156 5.166 2.156C3.78 2.156 2.296 3.094 2.296 5.166ZM0 5.18C0 2.03 2.366 0 5.166 0C7.952 0 10.318 2.03 10.318 5.18C10.318 8.316 7.952 10.346 5.166 10.346C2.366 10.346 0 8.316 0 5.18Z" fill="currentColor"/>
    </g>
  </svg>
{:else if name === 'array'}
  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="array">
    <path d="M7.728 9.926L6.902 7.658H2.87L2.044 9.926H0L3.808 0H6.048L9.828 9.926H7.728ZM4.886 2.142L3.514 5.894H6.258L4.886 2.142Z" fill="currentColor"/>
  </svg>
{:else if name === 'string'}
  <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="string">
    <g transform="translate(0 1.5)">
      <path d="M7.39203 2.576L5.65603 3.108C5.55803 2.562 5.11003 1.708 3.85003 1.708C2.91203 1.708 2.29603 2.31 2.29603 2.968C2.29603 3.514 2.64603 3.948 3.37403 4.088L4.76003 4.354C6.56603 4.704 7.53203 5.88 7.53203 7.28C7.53203 8.806 6.25803 10.346 3.94803 10.346C1.31603 10.346 0.154031 8.652 3.05176e-05 7.238L1.79203 6.762C1.87603 7.742 2.56203 8.624 3.96203 8.624C4.99803 8.624 5.57203 8.106 5.57203 7.406C5.57203 6.832 5.13803 6.384 4.36803 6.23L2.98203 5.95C1.40003 5.628 0.378031 4.606 0.378031 3.108C0.378031 1.344 1.96003 0 3.83603 0C6.24403 0 7.16803 1.456 7.39203 2.576Z" fill="currentColor"/>
    </g>
  </svg>
{:else if name === 'number'}
  <svg viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="number">
    <g transform="translate(0 1)">
      <path d="M8.47003 9.926H6.44003L1.93203 2.884V9.926H3.05176e-05V0H2.40803L6.53803 6.566V0H8.47003V9.926Z" fill="currentColor"/>
    </g>
  </svg>
{:else if name === 'boolean'}
  <svg viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="boolean">
    <g transform="translate(0 .75)">
      <path d="M3.05176e-05 0H3.57003C5.50203 0 6.59403 1.134 6.59403 2.674C6.59403 3.696 5.97803 4.522 5.15203 4.802C6.11803 5.04 6.90203 5.922 6.90203 7.154C6.90203 8.764 5.69803 9.926 3.83603 9.926H3.05176e-05V0ZM1.90403 4.102H3.27603C4.15803 4.102 4.69003 3.612 4.69003 2.856C4.69003 2.1 4.20003 1.624 3.26203 1.624H1.90403V4.102ZM1.90403 8.316H3.47203C4.41003 8.316 4.97003 7.826 4.97003 7.028C4.97003 6.244 4.46603 5.698 3.50003 5.698H1.90403V8.316Z" fill="currentColor"/>
    </g>
  </svg>
{:else if name === 'null'}
  <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="null">
    <g transform="translate(0 1.5)">
      <path d="M3.808 10.15C1.694 10.15 0 8.848 0 6.412V0H1.932V6.272C1.932 7.574 2.66 8.26 3.808 8.26C4.984 8.26 5.698 7.574 5.698 6.272V0H7.63V6.412C7.63 8.848 5.936 10.15 3.808 10.15Z" fill="currentColor"/>
    </g>
  </svg>
{/if}

<script>
export let name = 'object' // object|array|string|number|boolean|null
</script>

<style lang="scss">
svg {
  display: block;
  box-sizing: border-box;
  color: var(--type-icon-color, var(--json-editor-color-base));
  &.object {
    width: calc(var(--type-icon-size, 10px) + 1px);
  }
  &.array {
    width: var(--type-icon-size, 10px);
  }
  &.string {
    width: calc(var(--type-icon-size, 10px) - 2px);
  }
  &.number {
    width: calc(var(--type-icon-size, 10px) - 1px);
  }
  &.boolean {
    width: calc(var(--type-icon-size, 10px) - 3px);
  }
  &.null {
    width: calc(var(--type-icon-size, 10px) - 2px);
  }
}
</style>
