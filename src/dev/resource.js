export const sampleObject = {
  foo: 1,
  foo2: '1a1b1',
  foo3: false,
  foo44: [],
  foo4: [
    1, '2', null, true,
  ],
  foo5: {
    1: 11,
    22: '22',
    3: 33,
    44: null,
  },
}

export const sampleArray = [
  'apple',
  'banana',
  123123,
  false,
  'mango',
  [ 1, 2, 3 ],
  {
    foo: 'bar',
    colors: { apple: 'red', banana: 'yellow', mango: 'green' },
    empty: null,
  },
  ...(new Array(72).fill('apple')),
]
