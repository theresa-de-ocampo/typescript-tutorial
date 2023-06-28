// type Draggable = {
//   drag: () => void
// }

// type Resizeable = {
//   resize: () => void
// }

// type UIWidget = Draggable & Resizeable

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {}
// }

/**
 * An intersection type creates a new type by combining multiple existing types.
 */
type Person = {
  id: number
  name: string
  email: string
}

/**
 * Was supposed to use Employee here as an example, but got:
 *   - Duplicate identifier 'Employee'
 * It's complaining that 'Employee' was already declared at objects.ts
 */
type Customer = Person & {
  orders: Array<string>
  membership: string
}

let teriz: Customer = {
  id: 1,
  name: 'Teriz De Ocampo',
  email: 'theresa@gmail.com',
  orders: ['Doritos', 'Coffee'],
  membership: 'silver'
}

console.log(teriz)

export {}
