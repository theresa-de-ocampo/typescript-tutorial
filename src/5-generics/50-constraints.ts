interface Person {
  name: string
  age: number
}

class Human {
  constructor(public name: string, public age: number) {}
}

class Customer extends Human {
  constructor(public readonly id: number, name: string, age: number) {
    super(name, age)
  }
}

// extends - the type that can be assigned to T
function alpha<T_Value extends number | string>(value: T_Value): T_Value {
  return value
}

// We can pass any type of object, as long as it conforms to this shape
function beta<T_Value extends { name: string }>(value: T_Value): T_Value {
  return value
}

// We can also constraint by an interface
function charlie<T_Value extends Person>(value: T_Value): T_Value {
  return value
}

// Constraint by class
// Here, we can pass in an instance of Human, or any classes that derive from Human
function delta<T_Value extends Human>(value: T_Value): T_Value {
  return value
}

const teriz: Person = { name: 'Teriz', age: 24 }
const philip: Customer = { id: 1, name: 'Philip', age: 30 }

console.log('Alpha', alpha('Teriz'))

console.log('Beta - Shape', beta({ name: 'Teriz' }))
console.log('Beta - Person', beta(teriz))

console.log('Charlie', charlie(teriz))

console.log('Delta', delta(philip))

export {}
