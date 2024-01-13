// When extending a generic class, you have 3 options

interface Product {
  name: string
  price: number
  category: string
}

enum ProductCategories {
  FoodAndBeverages = 'Food & Beverages',
  Appliances = 'Appliances'
}

class Store<T_Object> {
  protected _objects: T_Object[] = []

  add(obj: T_Object): T_Object[] {
    this._objects.push(obj)
    return this._objects
  }

  get objects(): T_Object[] {
    return this._objects
  }
}

// (1) We are passing on the generic type parameter here
class CompressibleStore<T_Object> extends Store<T_Object> {
  compress(): void {
    console.log('Compressing objects')
  }
}

// (2) We're restricting the generic type parameter
class SearchableStore<
  T_Object extends { name: string }
> extends Store<T_Object> {
  find(name: string): T_Object | undefined {
    return this._objects.find(obj => obj.name === name)
  }
}

// (3) We don't have a type parameter here, I don't want this to be generic.
// We have fixed or terminated the generic type parameter.
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return this._objects.filter(product => product.category === category)
  }
}

const cheetos: Product = {
  name: 'Cheetos',
  price: 200,
  category: ProductCategories.FoodAndBeverages
}

const airconditioner: Product = {
  name: 'Airconditioner',
  price: 20_000,
  category: ProductCategories.Appliances
}

const coffeeMachine: Product = {
  name: 'Coffee Machine',
  price: 10_000,
  category: ProductCategories.Appliances
}

const productCatalog = new CompressibleStore<Product>()
productCatalog.add(cheetos)
console.log(productCatalog.objects)
productCatalog.compress()
console.log(' ')

const searchableProductCatalog = new SearchableStore<Product>()
searchableProductCatalog.add(cheetos)
searchableProductCatalog.add(airconditioner)
console.log(searchableProductCatalog.objects)
console.log(searchableProductCatalog.find('Cheetos'))
console.log(' ')

const productInventory = new ProductStore()
productInventory.add(cheetos)
productInventory.add(airconditioner)
productInventory.add(coffeeMachine)
console.log(productInventory.objects)
console.log(productInventory.filterByCategory('Appliances'))

export {}
