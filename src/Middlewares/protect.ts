import express, { Request, Response } from 'express'
import jwt, { Secret } from 'jsonwebtoken'

//@ts-ignore
export default (protect) => async (req: Request, res: Response, next) => {
  try {
    // const authorizationHeader = req.headers.authorization
    const authorizationHeader = req.body.token
    //@ts-ignore
    const token = authorizationHeader.split(' ')[1]
    jwt.verify(token, process.env.TOKEN_SECRET as Secret)
    next()
  } catch (err) {
    res.status(401)
    res.json('Access denied, invalid token')
    return
  }
}
