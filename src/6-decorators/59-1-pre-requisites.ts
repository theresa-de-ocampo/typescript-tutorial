/**
 * The Object.getOwnPropertyDescriptor() static method returns an object describing the
 * configuration of a specific property on a given object.
 *
 * That is, one directly present on an object and not in the object's prototype chain.
 */

const teriz = {
  name: 'Teriz De Ocampo',
  age: 24
}

const descriptor = Object.getOwnPropertyDescriptor(teriz, 'age')
console.log(descriptor?.configurable)
console.log(descriptor?.value)

export {}
