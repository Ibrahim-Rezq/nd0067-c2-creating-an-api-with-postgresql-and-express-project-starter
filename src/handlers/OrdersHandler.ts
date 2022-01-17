import express, { Request, Response } from 'express'
import protect from '../Middlewares/protect'
import { Order, OrdersStore } from '../models/OrdersModule'

const store = new OrdersStore()

const index = async (_req: Request, res: Response) => {
  try{
    const Orders = await store.index()
    res.json(Orders)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
} 

const show = async (req: Request, res: Response) => {
  try{
  const Order = await store.show(Number(req.params.id))
  res.json(Order)
} catch (err) {
  res.status(400)
  res.json(err)
}
}

const create = async (req: Request, res: Response) => {
  try {
    const Order: Order = {
      id: 1,
      amount: req.body.amount,
      state: req.body.state,
      product_id: req.body.product_id,
      user_id: req.body.user_id,
    }
    
    const newOrder = await store.create(Order)
    res.json(newOrder)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const OrderRoutes = (app: express.Application) => {
  app.get('/Orders',protect, index)
  app.get('/Orders/:id',protect, show)
  app.post('/Orders',protect, create)
}

export default OrderRoutes
