import $ from 'cash-dom'

export function getTypeName(src)
{
  if (src === undefined || src === null) return 'null'
  else if (Array.isArray(src)) return 'array'
  else if (typeof src === 'string') return 'string'
  else if (typeof src === 'number') return 'number'
  else if (typeof src === 'boolean') return 'boolean'
  else return 'object'
}

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
    else
    {
      return {}
    }
  }
  catch (e)
  {
    console.error('error', e.message)
  }
}
