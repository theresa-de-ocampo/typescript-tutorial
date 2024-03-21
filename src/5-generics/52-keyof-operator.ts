interface Product {
  name: string
  price: number
  category: string
}

// T is Product
// keyof T => 'name' | 'price' | 'category'
// The keyof operator gives the union of the properties of a given type
class Store<T> {
  protected _objects: T[] = []

  add(obj: T): T[] {
    this._objects.push(obj)
    return this._objects
  }

  // Useful, instead of defining several functions (findById, findByName, findByCategory, etc.)
  find(property: keyof T, value: unknown) {
    this._objects.find(obj => obj[property] === value)
  }

  get objects(): T[] {
    return this._objects
  }
}

const cheetos: Product = {
  name: 'Cheetos',
  price: 200,
  category: 'Food & Beverages'
}

let store = new Store<Product>()
store.add(cheetos)
console.log(store.find('name', 'Cheetos'))
console.log(store.find('price', 500))
// store.find('nonExistentProperty', true)

export {}
