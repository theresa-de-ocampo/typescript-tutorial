// [METHOD 1]
// let employee: {
//   readonly id: number
//   name: string
//   landline?: string
//   retire: (date: Date) => void
// } = { id: 1, name: 'Teriz', retire: (date: Date) => console.log(date) }

type Employee = {
  readonly id: number
  name: string
  landline?: string
  retire: (date: Date) => void
}

let developer: Employee = {
  id: 1,
  name: 'Teriz',
  retire: (date: Date) => console.log(date)
}
