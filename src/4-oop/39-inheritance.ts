class Person {
  constructor(public firstName: string, public lastName: string) {}

  walk() {
    console.log('Walking')
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

class Student extends Person {
  // When we use access modifiers at the contructor, we're essentialy creating parameter properties.
  // We don't wanna use the public modifier for firstName and lastName,
  // because we already created these properties at the Person class.
  constructor(
    public readonly studentId: number,
    firstName: string,
    lastName: string
  ) {
    super(firstName, lastName)
  }

  takeExam() {
    console.log('Taking an exam')
  }
}

const teriz = new Student(1, 'Teriz', 'De Ocampo')
teriz.walk()
teriz.takeExam()
