// * Interfaces provide more readable error messages on property conflicts.

type Pet = {
  name: string
}

type Dog = {
  name: boolean
}

// Trying to merge two types with the same properties will result in an error.
// Type 'string' is not assignable to type 'never'
// const athena: Pet & Dog = { name: 'Athena' }

interface Color {
  hexCode: string
}

// Interface 'Ballpen' incorrectly extends interface 'Color'
// Type of property 'hexCode' are incompatible
// Type 'number' is not assignable to type 'string'
// interface Ballpen extends Color {
//   hexCode: number
// }

// const faberCastell: Ballpen = { hexCode: '#fff' }
