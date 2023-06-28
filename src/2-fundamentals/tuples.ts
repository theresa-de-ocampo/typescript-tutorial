/**
 * Fixed-length array where each element has a particular type.
 * We also get code completion here.
 * Internally, tuples are represented as plain JS arrays.
 *
 * As a best practice, restrict your tuples to only 2 values bec. anything more than that is going
 * to make you code a bit harder to understand.
 * Tuples are useful when we only have 2 values, like key-value pairs.
 */
let user: [number, string] = [1, 'Teriz']
user[0].toExponential()
user[1].toUpperCase()

/**
 * One of the gaps of typescript is that the transpiler will not complain here.
 */
user.push(2)
