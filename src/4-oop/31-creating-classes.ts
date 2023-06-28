class Account {
  readonly id: number
  owner: string
  private _balance: number
  nickname?: string

  constructor(id: number, owner: string, balance: number, nickname?: string) {
    this.id = id
    this.owner = owner
    this._balance = balance
    if (nickname) this.nickname = nickname
  }

  deposit(amount: number): number {
    if (amount <= 0) {
      throw new Error('Invalid deposit amount')
    } else {
      this._balance += amount
    }

    return this._balance
  }

  getBalance(): number {
    return this._balance
  }
}

const terizAccount = new Account(1, 'Theresa De Ocampo', 10_000, 'Teriz')
terizAccount.deposit(5_000)
console.log(terizAccount)

const grantAccount = new Account(2, 'Grant MacLaren', 25_000)
console.log(grantAccount.getBalance())

export {}
