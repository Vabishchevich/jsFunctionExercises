// 1. Please write a function that reverses a string

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'))

// 2. Please write a function that filters out numbers from a list

function filterArray(arr) {
  return arr.filter(o => typeof o === 'number')
}

console.log(filterArray(['one', 1, -2, 'two', 'there', 4, 5, 'four']))

// 3. Please write a function that shows the usage of closures

function a() {
  let name = 'Eugene';
  return function() {
    console.log(name)
  }
}

// 4. Please write a recursive function that flattens an list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// There is a typo in the condition: the input parameters have an extra closing parenthesis at the very end
function flatten(arr) {
  let result = [];
  arr.forEach(o => {
    if (Array.isArray(o)) result.push(...flatten(o))
    else result.push(o)
  });
  return result
}

console.log(flatten([[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]))

// 5. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

function commonElements(arr1, arr2) {
  let set1 = [...new Set(arr1)];
  let set2 = [...new Set(arr2)];
  return [...set1.filter(o => set2.includes(o))]
}

console.log(commonElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))

// 6. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

function differentElements(arr1, arr2) {
  let set1 = [...new Set(arr1)];
  let set2 = [...new Set(arr2)];
  return [...set1.filter(o => !set2.includes(o)), ...set2.filter(o => !set1.includes(o))]
}

console.log(differentElements(['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']))

// 7. Please write a function that transforms an object to a list of [key, value] tuples.
// example input { color: 'Blue', id: '22', size: 'xl' }
// example output [['color', 'blue'], ['id', '22'], ['size', 'xl']]

function arrayTuple(obj) {
  return Object.entries(obj)
}

console.log(arrayTuple({ color: 'Blue', id: '22', size: 'xl' }))

// 8. Please write a function that transforms a list of [key, value] tuples to object. // reverse or task 7
// example input [['color', 'blue'], ['id', '22'], ['size', 'xl']]
// example output { color: 'Blue', id: '22', size: 'xl' }

// There is a typo in the input and output string: the value is 'blue'
function objectTuple(arr) {
  return Object.fromEntries(arr)
}

console.log(objectTuple([['color', 'blue'], ['id', '22'], ['size', 'xl']]))

// 9. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

function getArrayTuple(arr1, arr2) {
  let result = [];
  for(let i = 0; i < arr1.length; i++) {
    if (arr2[i]) result.push([arr1[i], arr2[i]])
  };
  return result
}

console.log(getArrayTuple([1,2,3], [4,5,6,7]))

// 10. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

function getValuePath(path, obj) {
  let current = obj;
  for(let i = 0; i < path.length; i++) {
    if (typeof current[path[i]] === 'undefined') return 'undefined';
    else current = current[path[i]]
  };
  return current
}

console.log(getValuePath(['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }))

// 11. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

function compareObjects(obj1, obj2) {
  return Object.keys(obj1).some(o => obj2[o] && obj1[o] === obj2[o])
}

console.log(compareObjects({ a: 'b', c: 'd' }, { c: 'd', a: 'b' }))
console.log(compareObjects({ a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }))

// 12. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

function uniqueObject(arr, obj) {
  arr.forEach(o => {
    if (obj[o]) delete obj[o]
  })
  return obj
}

console.log(uniqueObject(['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }))