import express, { Request, Response } from 'express';
import protect from '../Middlewares/protect';
import { Product, ProductStore } from '../models/ProductsModule';

const store = new ProductStore();

const index = async (_req: Request, res: Response) => {
  try {
    const Products = await store.index();
    res.json(Products);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const Product = await store.show(req.body.id);
    res.json(Product);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const Product: Product = {
      id: 1,
      name: req.body.name,
      price: req.body.price,
    };
    const newProduct = await store.create(Product);
    res.json(newProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const ProductRoutes = (app: express.Application) => {
  app.get('/Products', index);
  app.get('/Products/:id', show);
  app.post('/Products', protect, create);
};

export default ProductRoutes;
