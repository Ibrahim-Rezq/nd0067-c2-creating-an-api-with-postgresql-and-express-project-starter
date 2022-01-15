import express, { Request, Response } from 'express'
import { User, UsersStore } from '../models/UsersModule'
import jwt, { Secret } from 'jsonwebtoken'
import protect from '../Middlewares/protect'

const store = new UsersStore()

const index = async (_req: Request, res: Response) => {
try{
  const Users = await store.index()
  res.json(Users)
}
catch (err) {
  res.status(400)
  res.json(err)
}
}

const show = async (req: Request, res: Response) => {
 try{
   const User = await store.show(Number(req.body.id))
   res.json(User)
 }
 catch (err) {
   res.status(400)
   res.json(err)
 }
}

const create = async (req: Request, res: Response) => {
  try {
    const User: User = {
      id: 1,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
    }
    const newUser = await store.create(User)

    const token = jwt.sign(
      { user: newUser },
      process.env.TOKEN_SECRET as string
    )
    res.json(token)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}
const login = async (req: Request, res: Response) => {
  try {
    const newUser = await store.authenticate(
      req.body.username,
      req.body.password
    )
    res.json(newUser)
  } catch (err) {
    res.status(400)
    res.json(err)
  }
}

const UserRoutes = (app: express.Application) => {
  app.get('/Users',protect, index)
  app.get('/Users/:id',protect, show)
  app.post('/Users',protect, create)
  app.post('/Users/login', protect, login)
}

export default UserRoutes
