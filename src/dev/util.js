/**
 * random pick in array
 * @param {array} arr
 * @return {any}
 */
export function randomPickInArray(arr = [])
{
  return arr[Math.floor(Math.random() * arr.length)]
}
