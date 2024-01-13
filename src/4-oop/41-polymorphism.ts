class Person {
  public firstName: string
  public lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  walk(): void {
    console.log('Walking')
  }
}

class Student extends Person {
  public readonly id: number

  constructor(id: number, firstName: string, lastName: string) {
    super(firstName, lastName)
    this.id = id
  }

  takeTest(): void {
    console.log('Taking Exam')
  }
}

class Teacher extends Person {
  constructor(firstName: string, lastName: string) {
    super(firstName, lastName)
  }

  override get fullName(): string {
    return `Professor ${this.firstName} ${this.lastName}`
  }
}

const teriz = new Student(1, 'Teriz', 'De Ocampo')
const mosh = new Teacher('Mosh', 'Hamedani')

printNames([teriz, mosh])

function printNames(people: Person[]): void {
  for (let person of people) {
    console.log(person.fullName)
  }
}

export {}
