/**
 * Change any below to unknown
 *
 * Using the unknown type is preferred to using the any type,
 * because the compiler forces us to do some type checking/narrowing
 * to make sure that the methods we are calling, exists on the target object.
 */

function render(document: any) {
  document.move()
  document.fly()
  document.whatever()
}
