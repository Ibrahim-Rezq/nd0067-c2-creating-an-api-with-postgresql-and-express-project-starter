import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import ProductRoutes from './handlers/ProductsHandler'
import OrderRoutes from './handlers/OrdersHandler'
import UserRoutes from './handlers/UsersHandler'

const app: express.Application = express()
const address: string = '127.0.0.1:3000'

app.use(bodyParser.json())
app.use(cors())

ProductRoutes(app)
OrderRoutes(app)
UserRoutes(app)

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log(`starting app on: ${address}`)
})
