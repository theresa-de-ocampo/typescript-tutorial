/**
 * To apply a decorator to a function, three parameters are needed.
 * target is the target object where the method is defined.
 * The names of these parameters does not matter, what matters is their number and type.
 */
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // descriptor.value here references the target method.
  // Most of the time, you would not want to just entirely replace the method.
  // You wanna enhance an existing method, so you wanna do something before or after that method.
  // descriptor.value = () => {
  //   console.log('New Implementation')
  // }

  /**
   * If you used an arrow function instead, you'll get:
   * 'this' implicitly has type 'any' because it does not have a type annotation.
   * an outer value of 'this' is shadowed by this container
   */
  // const original = descriptor.value as Function
  // descriptor.value = function (message: string) {
  //   console.log('Before')
  //   original.call(this, message)
  //   console.log('After')
  // }

  /**
   * Using this decorator, we have enhanced the function; but there is a tiny problem here.
   * With this implementation, we can only apply this decorator to methods with the
   * message signature.
   *
   * Using the rest parameter (...) allows a function to treat an indefinite number of arguments as
   * an array. Then use the the spread operator at .call()
   */

  const original = descriptor.value as Function
  descriptor.value = function (...args: any) {
    console.log('Before')
    original.call(this, ...args)
    console.log('After')
  }

  console.log(target)
  console.log(methodName)
}

class Person {
  @Log
  talk(message: string) {
    console.log(`Person says "${message}".`)
  }
}

const teriz = new Person()
teriz.talk('Hello World')

export {}
