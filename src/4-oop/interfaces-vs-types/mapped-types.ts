type Fruit = 'mango' | 'apple' | 'orange'

type FruitCount = {
  [key in Fruit]: number
}

// Error
// interface FruitCount {
//   [key in Fruit]: number
// }

const fruits: FruitCount = {
  mango: 5,
  apple: 2,
  orange: 3
}

console.dir(fruits, { depth: null })

export {}
