export function stringToElement(str, clone = false)
{
  const template = document.createElement('template')
  template.innerHTML = str.trim()
  if (clone)
  {
    return template.content.cloneNode(true)
  }
  else
  {
    return template.content.firstChild
  }
}

export function getTypeName(src)
{
  if (src === undefined || src === null) return 'null'
  else if (Array.isArray(src)) return 'array'
  else if (typeof src === 'string') return 'string'
  else if (typeof src === 'number') return 'number'
  else if (typeof src === 'boolean') return 'boolean'
  else return 'object'
}
