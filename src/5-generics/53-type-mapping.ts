// Type Mapping - sometimes we have to base a type from another type
interface Product {
  name: string
  price: number
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

type Optional<T> = {
  [K in keyof T]?: T[K]
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null
}

let cheetos: ReadOnly<Product> = {
  name: 'Cheetos',
  price: 200
}

// cheetos.name = 'Cheezoos'
