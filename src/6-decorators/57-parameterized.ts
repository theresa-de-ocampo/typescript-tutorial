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

@Component({ selector: '#my-profile' })
class ProfileComponent {}

new ProfileComponent()

export {}
