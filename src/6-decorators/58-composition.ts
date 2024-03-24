// We can also apply multiple decorators to each class or member.
type ComponentOptions = {
  selector: string
}

// Decorator Factory
// This function is acting as a factory for creating a decorator.
function Component(options: ComponentOptions) {
  // We have to return a decorator function
  return (constructor: Function) => {
    console.log('Component Decorator Called')
    constructor.prototype.options = options
    constructor.prototype.uniqueId = Date.now()
    constructor.prototype.insertDom = () => {
      console.log('Inserting the component in the DOM')
    }
  }
}

function Pipe(constructor: Function) {
  console.log('Pipe constructor called.')
  constructor.prototype.pipe = true
}

@Component({ selector: '#my-profile' })
@Pipe
class ProfileComponent {}

new ProfileComponent()

/**
 * Decorators are applied/called in the reverse order, i.e., Pipe decorator is called first.
 * The idea behind this comes from Math. If we have the ff. expression: f(g(x))
 * g(x) is evaluated first, and its value is passed to function f.
 */

export {}
