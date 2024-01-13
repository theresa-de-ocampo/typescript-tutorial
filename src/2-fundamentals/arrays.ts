/**
 * If you want to initialize it to an empty array, you should use annotations.
 * Because TS will automatically set its type to any.
 * Another benefit of TS is code completion or Intellisense.
 */
let numbers: number[] = [1, 2, 3]
numbers.forEach(n => n.toExponential())

export {}
