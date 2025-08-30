function Capitalize(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  // description.value doesn't work for getter and setters
  // It only works for regular methods
  const original = descriptor.get
  descriptor.get = function () {
    const result = original?.call(this)

    return typeof result === 'string' ? result.toUpperCase() : result
  }
}

class Person {
  constructor(public firstName: string, public lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.firstName} ${this.lastName}`
    // return 0
    // return null
  }
}

let person = new Person('teriz', 'de ocampo')
console.log(person.fullName)

export {}
