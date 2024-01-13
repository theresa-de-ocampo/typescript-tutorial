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

function alpha<T_Value extends number | string>(value: T_Value): T_Value {
  return value
}

function beta<T_Value extends { name: string }>(value: T_Value): T_Value {
  return value
}

function charlie<T_Value extends Person>(value: T_Value): T_Value {
  return value
}

function delta<T_Value extends Human>(value: T_Value): T_Value {
  return value
}

console.log(alpha('Teriz'))
console.log(beta({ name: 'Teriz' }))

const teriz: Person = { name: 'Teriz', age: 24 }
console.log(charlie(teriz))

const philip: Customer = { id: 1, name: 'Philip', age: 30 }
console.log(delta(philip))

export {}
