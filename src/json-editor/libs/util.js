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
    switch (e.code)
    {
      case 'KeyB': // ctrl+b
      case 'KeyI': // ctrl+i
      case 'KeyU': // ctrl+u
        return true
    }
  }
  return false
}

/**
 * select element text
 * @param {MouseEvent} e
 */
export function selectText(e)
{
  e.preventDefault()
  const el = e.currentTarget
  const range = document.createRange()
  range.selectNodeContents(el)
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)
}

export function pastePlainText(e)
{
  e.preventDefault()
  const clipboardData = (e.originalEvent || e).clipboardData
  let text = clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
}
