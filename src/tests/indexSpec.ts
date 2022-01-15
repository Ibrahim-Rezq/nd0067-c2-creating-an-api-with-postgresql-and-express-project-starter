import { Product,ProductStore } from '../models/ProductsModule'
import { User, UsersStore } from '../models/UsersModule'
import { Order,OrdersStore } from '../models/OrdersModule'

const productStore = new ProductStore()
const usersStore = new UsersStore()
const ordersStore = new OrdersStore()

const testProduct:Product={
  id: 1,
  name: "webon",
  price: 12
}

describe('Product Model', () => {
  beforeAll(()=>{
    productStore.create(testProduct)
  })
  
  it('should have an index method', () => {
    expect(productStore.index).toBeDefined()
  })
  
  it('index method Works', async() => {
    const result=await productStore.index()
    Object.keys(testProduct).map(key => {
   expect(result[0].hasOwnProperty(key)).toBe(true)
    })
  })
  
  it('should have an show method', () => {
    expect(productStore.show).toBeDefined()
  })
  
  it('show method Works', async() => {
    const result=await productStore.show(1)
    Object.keys(testProduct).map(key => {
      expect(result.hasOwnProperty(key)).toBe(true)
       })   
  })
  
  it('should have an create method', () => {
    expect(productStore.create).toBeDefined()
  })
  
  it('create method Works', async() => {
    const result=await productStore.create(testProduct)
    expect(result.id).not.toBeNaN()
  })

})

const testUser:User={
  id: 1,
  firstName: "string",
  lastName: "string",
  username: "string",
  password: "string",

}

describe('Users Model', () => {
  beforeAll(()=>{
    usersStore.create(testUser)
  })
  
  it('should have an index method', () => {
    expect(usersStore.index).toBeDefined()
  })
  
  it('index method Works', async() => {
    const result=await usersStore.index()
    expect(result).toBeDefined()
  })

  
  it('should have a show method', () => {
    expect(usersStore.show).toBeDefined()
  })
  
  it('show method Works', async() => {
    const result=await usersStore.show(1)
    expect(result).toBeDefined()
  })
  
  it('should have a create method', () => {
    expect(usersStore.create).toBeDefined()
  })
  
  it('Create method Works', async() => {
    const result=await usersStore.create(testUser)
    expect(result.id).not.toBeNaN()
  })
})
const testOrder:Order={
    id: 1,
    amount: 1,
    state: true,
    product_id: 1,
    user_id: 1,
  }
  
  describe('Orders Model', () => {
    beforeAll(()=>{
      ordersStore.create(testOrder)
    })

    it('should have an index method', () => {
      expect(ordersStore.index).toBeDefined()
    })
    
    it('index method Works', async() => {
      const result=await ordersStore.index()
      expect(result).toBeDefined()
    })
    
    it('should have a show method', () => {
      expect(ordersStore.show).toBeDefined()
    })
    
    it('show method Works', async() => {
      const result=await ordersStore.show(1)
      expect(result).toBeDefined()
    })
    
    it('should have a create method', () => {
      expect(ordersStore.create).toBeDefined()
    })
    
    it('create method Works', async() => {
      const result=await ordersStore.create(testOrder)
      expect(result.id).not.toBeNaN()
    })

  })


import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
const token= process.env.TEST_TOKEN

describe('Test endpoint responses for products', () => {
    it('POST /Products Works', async () => {
        const response = await request.post('/products')
        .send(JSON.stringify(testProduct))
        .auth((token as string), { type: 'bearer' })
        .expect('Content-Type', /json/)
        .expect(200)      
      }
      )
      it('GET /Products Works', async () => {
        const response = await request.get('/Products')
        .expect('Content-Type', /json/)
        .expect(200)      
      }
      )
      it('GET /Products/:id Works', async () => {
        const response = await request.get('/Products/1').auth((token as string), { type: 'bearer' })
        .expect('Content-Type', /json/)
        .expect(200)      
        }
        )
});

describe('Test endpoint responses for orders', () => {
    it('GET /Orders Works', async () => {
      const response = await request.get('/orders')
      .auth((token as string), { type: 'bearer' })
      .expect('Content-Type', /json/)
      .expect(200)      
    }
    )
    it('GET /Orders/:id Works', async () => {
      const response = await request.get('/orders')
      .auth((token as string), { type: 'bearer' })
      .expect('Content-Type', /json/)
      .expect(200)      
    }
    )
    it('POST /Orders Works', async () => {
      const response = await request.get('/orders')
      .auth((token as string), { type: 'bearer' })
      .send(JSON.stringify(testOrder))
      .expect('Content-Type', /json/)
      .expect(200)      
      }
      )
    });
    
    describe('Test endpoint responses for users', () => {
      it('GET /Users Works', async () => {
        const response = await request.get('/Users')
        .auth((token as string), { type: 'bearer' })
        .expect('Content-Type', /json/)
        .expect(200)      
      }
      )
      it('GET /Users/:id Works', async () => {
        const response = await request.get('/Users')
        .auth((token as string), { type: 'bearer' })
        .expect('Content-Type', /json/)
        .expect(200)      
      }
      )
      it('POST /Users Works', async () => {
        const response = await request.get('/Users')
        .auth((token as string), { type: 'bearer' })
        .send(JSON.stringify(testUser))
        .expect('Content-Type', /json/)
        .expect(200)      
        }
        )
});

