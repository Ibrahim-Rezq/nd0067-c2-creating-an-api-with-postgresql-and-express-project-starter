import { Product, ProductStore } from '../models/ProductsModule'
import { UsersStore } from '../models/UsersModule'
import { OrdersStore } from '../models/OrdersModule'

const productStore = new ProductStore()
const usersStore = new UsersStore()
const ordersStore = new OrdersStore()
import protect from '../Middlewares/protect'

describe('Product Model', () => {
  it('should have an index method', () => {
    expect(productStore.index).toBeDefined()
  })

  it('should have a show method', () => {
    expect(productStore.show).toBeDefined()
  })

  it('should have a create method', () => {
    expect(productStore.create).toBeDefined()
  })
})

describe('Users Model', () => {
  it('should have an index method', () => {
    expect(usersStore.index).toBeDefined()
  })

  it('should have a show method', () => {
    expect(usersStore.show).toBeDefined()
  })

  it('should have a create method', () => {
    expect(usersStore.create).toBeDefined()
  })
})

describe('Orders Model', () => {
  it('should have an index method', () => {
    expect(ordersStore.index).toBeDefined()
  })

  it('should have a show method', () => {
    expect(ordersStore.show).toBeDefined()
  })

  it('should have a create method', () => {
    expect(ordersStore.create).toBeDefined()
  })
})
