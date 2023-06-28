/**
 * Common Usage: Optional Parameter
 * W/out using the union type, you can set strictNullChecks to false under Type Checking of config.
 * But we really should not do this since it is a common source of bugs.
 * @param name
 */
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase())
  else console.log('Hola')
}

greet(null)

// * Optional Chaining
type Student = {
  id: number
  birthday: Date
}

/**
 * For instance, this a function that gets a student record from the database.
 * Return type is Student or null, in case there is not student with the given ID.
 */
function getStudent(id: number): Student | null {
  return id === 0 ? null : { id, birthday: new Date() }
}

let myStudent = getStudent(0)
// 'myStudent' is possible 'null'
// console.log(myStudent.birthday)
console.log(myStudent?.birthday) // outputs undefined

/**
 * Optional element access operator
 * Useful when you're dealing with arrays.
 * customer?.[0]
 */

/**
 * Optional Call Operator
 * This piece of code will be executed, only if log is referencing an actual function.
 */
let log: any = null
log?.('a')

// Nullish Coalescing Operator
let speed: number | null = null
let ride = {
  // Falsy: undefined, null, '', false, 0
  // speed || 30  will not work as intended since 0 is falsy

  // If speed is undefined or null, set it to 0
  speed: speed ?? 30
}
console.log(ride.speed)
