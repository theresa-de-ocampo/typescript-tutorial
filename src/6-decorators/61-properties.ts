// ! Property decorators don't work anymore
// https://github.com/microsoft/TypeScript/issues/44673
function MinLength(length: number) {
  console.log('I called MinLength')
  return function (target: any, propertyName: string) {
    let value: string

    const descriptor: PropertyDescriptor = {
      get() {
        console.log('I called getter')
        return value
      },
      set(newValue: string) {
        console.log('I called setter')
        if (newValue.length < length) {
          throw new Error(
            `${propertyName} should be at least ${length} characters.`
          )
        }
        value = newValue
      }
    }

    Object.defineProperty(target, propertyName, descriptor)
  }
}

class User {
  @MinLength(4)
  password: string

  constructor(password: string) {
    this.password = password
  }
}

const user = new User('1234')
user.password = 'a'
console.log(user.password)

export {}
