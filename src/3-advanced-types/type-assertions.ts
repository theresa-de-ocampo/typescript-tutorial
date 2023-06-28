// Returns either an HTMLElement or null if the element was not found
const fname = document.getElementById('fname')

// This will throw an error
// const fname.value

/**
 * There are no type conversions.
 * We're just telling the compiler that we know more about this type than you do.
 *
 * So, if the object returned is not an HTMLInputElement, the assignment will not throw an error.
 * But accessing the value will cause the program to crash.
 */
const lname = document.getElementById('lname') as HTMLInputElement
lname.value

// Another syntax for type assertion
const phone = <HTMLInputElement>document.getElementById('phone')
phone.value
