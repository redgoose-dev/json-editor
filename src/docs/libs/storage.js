/**
 * check localStorage
 */
function checkObject()
{
  return !!window.localStorage
}

/**
 * get value in localStorage
 */
export function get(key)
{
  if (!(checkObject() && key)) return undefined
  return window.localStorage.getItem(key)
}

/**
 * set value in localStorage
 */
export function set(key, value)
{
  if (!(checkObject() && key && value)) return
  window.localStorage.setItem(key, value)
}
