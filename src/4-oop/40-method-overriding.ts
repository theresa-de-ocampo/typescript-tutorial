class Human {
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

class Teacher extends Human {
  override get fullName() {
    return `Professor ${super.fullName}`
  }
}

const mosh = new Teacher('Mosh', 'Hamedani')
console.log(mosh.fullName)

export {}
