import $ from 'cash-dom'

/**
 * get type name
 * @params {any} src
 * @return {string}
 */
export function getTypeName(src)
{
  if (src === undefined || src === null) return 'null'
  else if (Array.isArray(src)) return 'array'
  else if (typeof src === 'string') return 'string'
  else if (typeof src === 'number') return 'number'
  else if (typeof src === 'boolean') return 'boolean'
  else return 'object'
}

/**
 * check data
 * @params {any} src
 * @return {object|array}
 */
export function checkData(src)
{
  try
  {
    if (typeof src === 'string')
    {
      return JSON.parse(src)
    }
    else if (Array.isArray(src))
    {
      return Object.assign([], src)
    }
    else if ($.isPlainObject(src))
    {
      return Object.assign({}, src)
    }
    return {}
  }
  catch (e)
  {
    console.error('error', e.message)
  }
}

/**
 * get count properties
 * @params {object|array} obj
 * @return {number}
 */
export function getCountProperty(obj)
{
  if (Array.isArray(obj))
  {
    return obj.length
  }
  else if ($.isPlainObject(obj))
  {
    return Object.keys(obj).length
  }
  return 0
}

/**
 * check font shortcut key
 * @param {KeyboardEvent} e
 * @return {boolean}
 */
export function checkFontShortcut(e)
{
  if (e.ctrlKey || e.metaKey)
  {
    switch (e.keyCode)
    {
      case 66: case 98: // ctrl+b
      case 73: case 105: // ctrl+i
      case 85: case 117: // ctrl+u
        return true
    }
  }
  return false
}