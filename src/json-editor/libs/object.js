/**
 * get type name
 * @param {any} src
 * @return {'null'|'array'|'string'|'number'|'boolean'|'object'}
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
 * count children item
 * @param {object|array} item
 * @param {string} type
 * @return {number}
 */
export function countChildrenItem(item, type)
{
  if (!type) type = getTypeName(item)
  switch (type)
  {
    case 'object':
      return Object.keys(item).length
    case 'array':
      return item.length
    default:
      return 0
  }
}

/**
 * convert pure object
 * @param {any} src
 * @return {object|array}
 */
export function pureObject(src)
{
  if (!src) return null
  try
  {
    return JSON.parse(JSON.stringify(src))
  }
  catch(_)
  {
    return null
  }
}

/**
 * access object
 * @param {array|object} src
 * @param {string} path
 * @return {array|object}
 */
export function accessObject(src, path)
{
  let structure = path.split('.')
  while (structure.length > 0)
  {
    src = src[structure]
    structure.shift()
  }
  return src
}
