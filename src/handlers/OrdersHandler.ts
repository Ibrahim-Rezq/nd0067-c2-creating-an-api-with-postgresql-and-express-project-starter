import express, { Request, Response } from 'express'
import { Order, OrdersStore } from '../models/OrdersModule'

const store = new OrdersStore()

const index = async (_req: Request, res: Response) => {
  const Orders = await store.index()
  res.json(Orders)
}

const show = async (req: Request, res: Response) => {
  const Order = await store.show(req.body.id)
  res.json(Order)
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
    console.log(Order)

    const newOrder = await store.create(Order)
    res.json(newOrder)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const OrderRoutes = (app: express.Application) => {
  app.get('/Orders', index)
  app.get('/Orders/:id', show)
  app.post('/Orders', create)
}

export default OrderRoutes
