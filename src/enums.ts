/**
 * Enums represent a list of related constants.
 * By default, TypeScript assigns 0, 1, 2, and so on.
 *
 * If you set a value even for just one element,
 * you'd then have to explicitly set a value for each member.
 *   - Enum member must have initializer.
 */
enum Size {
  Small,
  Medium,
  Large
}

/**
 * So now that we have this new type, we can declare a variable.
 */
let mySize: Size = Size.Medium
console.log(mySize)

/**
 * If we define our enums using the const keyword, the transpiler will generate more optimized code.
 */
const enum CivilStatus {
  Single = 'single',
  Married = 'married',
  Widowed = 'widowed',
  Divorced = 'divorced'
}
let myCivilStatus = CivilStatus.Single
console.log(myCivilStatus)
