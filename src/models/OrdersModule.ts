import Client from '../database'

export type Order = {
  id: number
  amount: number
  state: boolean
  product_id: number
  user_id: number
}

export class OrdersStore {
  async index(): Promise<Order[]> {
    try {
      const conn = await Client.connect()
      const sql = 'SELECT * FROM orders'
      
      const result = await conn.query(sql)
      
      conn.release()
      
      return result.rows 
    } catch (err) {
      throw new Error(`Could not get orders. Error: ${err}`)
    }
  }
  
  async show(id: number): Promise<Order> {
    try {
      const sql = 'SELECT * FROM orders WHERE user_id=($1)'
      // @ts-ignore
      const conn = await Client.connect()
      const result = await conn.query(sql, [id])
      
      conn.release()
      
      return result.rows[0]
    } catch (err) {
      throw new Error(`Could not find Order ${id}. Error: ${err}`)
    }
  }
  
  async create(o: Order): Promise<Order> {
    try {
      const sql =
      'INSERT INTO orders (state,user_id) VALUES($1, $2) RETURNING *'
      const conn = await Client.connect()
      const sql2 =
      'INSERT INTO order_products (order_id,product_id,amount) VALUES($1, $2, $3) RETURNING *'
      
      const result = await conn.query(sql, [
        o.state,
        o.user_id,
      ])
      const order = result.rows[0]
      
      const result2 = await conn.query(sql2, [
        order.id,
        o.product_id,
        o.amount,
      ])
      conn.release()
      return order
    } catch (err) {
      throw new Error(`Could not add new order. Error: ${err}`)
    }
  }
}
