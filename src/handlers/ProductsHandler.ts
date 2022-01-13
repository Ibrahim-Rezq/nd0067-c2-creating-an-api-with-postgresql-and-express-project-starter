import express, { Request, Response } from 'express'
import { Product, ProductStore } from '../models/ProductsModule'

const store = new ProductStore()

const index = async (_req: Request, res: Response) => {
  const Products = await store.index()
  res.json(Products)
}

const show = async (req: Request, res: Response) => {
  const Product = await store.show(req.body.id)
  res.json(Product)
}

const create = async (req: Request, res: Response) => {
  try {
    const Product: Product = {
      id: 1,
      name: req.body.name,
      price: req.body.price,
    }
    const newProduct = await store.create(Product)
    res.json(newProduct)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const ProductRoutes = (app: express.Application) => {
  app.get('/Products', index)
  app.get('/Products/:id', show)
  app.post('/Products', create)
}

export default ProductRoutes
