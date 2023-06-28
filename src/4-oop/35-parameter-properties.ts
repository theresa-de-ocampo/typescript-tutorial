class Account {
  // This syntax is called parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number,
    public nickname?: string
  ) {}

  deposit(amount: number): number {
    if (amount <= 0) {
      throw new Error('Invalid deposit amount')
    } else {
      this._balance += amount
    }

    return this._balance
  }

  get balance(): number {
    return this._balance
  }

  // A set accessor cannot have a return type annotation
  set balance(amount: number) {
    if (amount <= 0) {
      throw new Error('Invalid amount')
    } else {
      this._balance += amount
    }
  }
}

const terizAccount = new Account(1, 'Theresa De Ocampo', 10_000, 'Teriz')
terizAccount.deposit(5_000)
console.log(terizAccount)

const grantAccount = new Account(2, 'Grant MacLaren', 25_000)
grantAccount.balance = 700
console.log(grantAccount.balance)
