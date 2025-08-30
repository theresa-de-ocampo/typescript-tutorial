// You'll get a compilation error.
// Because by default, JS code is not included in the transpilation process.
// So our TypeScript compiler cannot see
// In the tsconfig, you have to set allowJs to true.
// Cannot find a declaration file for module "./tax"

import { calculateTax } from './tax'

// console.log(calculateTax(1000))

// When using JS code, by default, you don't get any type checking
// So we can call calculateTax without supplying an argument.
// We'll not know about this issue until runtime.
// You'll get NaN.
console.log(calculateTax())
