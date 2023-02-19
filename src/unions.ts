/**
 * With union types, we can give a variable or a function parameter more than one type.
 *
 * Initially, we don't know if the weight is a number or a string.
 * So when we do weight period, we only see properties and methods that are common between numbers
 * and strings.
 */
function kgToLbs(weight: number | string): number {
  // Narrowing Technique of Unions
  if (typeof weight === 'number') {
    // In this code block, the transpiler knows that weight is a number.
    // weight period will show all props/methods for numbers
    return weight * 2.2
  } else return parseFloat(weight) * 2.2
}

kgToLbs(10)
kgToLbs('10kg')
