/**
 * If you don't have a return statement, TS infers that the return type is void.
 * If you return 0, TS infers that the return type is number.
 * But as best practice, we should always properly annotate our functions -
 * both the return type, and parameters.
 * Especially if we are building an API for other people to use.
 *
 * Explicitly specifying the return type provides a benefit.
 * If you forgot to return a value, or returned a different type,
 * we get a transpilation error immediately.
 *
 * We have a transpilation option for detecting unused vars.
 * Although you have set no-unused-vars in .eslintrc, this is overwritten by TS' config.
 * Go to the Type Checking section, set noUnusedParameters to true.
 * noUnusedParameters is not part of strict setting.
 *
 * If we just have `if (income < 50_000) return income * 1.2`,
 * because JS implicitly returns 'undefined', we'll get:
 *   - Function lacks ending return statement, and return type does not include 'undefined'
 *
 * If you don't define the return type, you should turn on noImplicitReturns
 *
 * You could say that a param is optional by adding a question mark:
 *   function calculateTax(income: number, taxYear?: number)
 *
 * @param income
 */
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2
  return income * 1.3
}

/**
 * If you pass in more than 2 arguments, you'll get an error.
 * In JS, you can pass in more, or less parameters.
 */
calculateTax(10_000, 2022)
