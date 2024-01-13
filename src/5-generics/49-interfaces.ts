import { faker } from '@faker-js/faker'

// http://mywebsite.com/users
// http://mywebsite.com/products

interface Result<T_Data> {
  data: T_Data | null
  error: string | null
}

function fetch<T_Data>(url: string): Result<T_Data> {
  let data = null

  if (url.includes('user')) {
    data = {
      username: faker.person.fullName()
    } as T_Data
  } else if (url.includes('product')) {
    data = {
      title: faker.commerce.product()
    } as T_Data
  }

  return { data, error: null }
}

interface User {
  username: string
}

interface Product {
  title: string
}

let person = fetch<User>('user-url')
let cart = fetch<Product>('product-url')

console.log(person.data?.username)
console.log(cart.data?.title)

export {}
