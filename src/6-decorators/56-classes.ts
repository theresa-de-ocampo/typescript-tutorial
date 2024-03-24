/**
 * Decorators are attributes that we apply to classes and their members to change how they behave.
 * Decorators are frequently used for Angular and Vue applications.
 * Angular and Vue have many built-in decorators like @Component.
 *
 * Underhood, this decorator is just a function that gets called by the JavaScript runtime.
 * So the JavaScript engine is gonna call this function (@Component), and pass our class to it.
 * In that function, we have a chance to modify/enhance this class, i.e., we can add new properties,
 * new methods, or change the implementation of existing methods.
 */

// With the ff e.g., we can also solve it problem using inheritance.

/**
 * Depending on where we're going to apply this decorator, the number and type of parameters varies.
 * So if we're going to apply this to a class, it should have a single parameter.
 * If the type is a Function, the runtime assumes that we're going to apply this on a class.
 * @param constructor
 */
function Component(constructor: Function) {
  console.log('Component Decorator Called')
  constructor.prototype.uniqueId = Date.now()
  constructor.prototype.insertDom = () => {
    console.log('Inserting the component in the DOM')
  }
}

@Component
class ProfileComponent {}

new ProfileComponent()

// Even if we have zero or many instances of ProfileComponent, the decorator will always be called once.

// Property 'uniqueId' does not exist on type 'ProfileComponent'.
// Looks pretty useless to me, might as well just use inheritance.
// teriz.uniqueId

export {}
