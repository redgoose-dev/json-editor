export function newItemValue(type)
{
  return {
    object: Object.assign({}),
    array: Object.assign([]),
    string: '',
    number: 0,
    boolean: false,
    null: null,
  }[type]
}