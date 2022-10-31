import  express  from 'express'
import HelloController from './controllers/HelloController'
import UserController from './controllers/UserControllers'

import SessionController from './controllers/SessionController'
import auth from './middlewares/auth'
import ProductsController from './controllers/ProductsController'

const routes =  express()


routes.post('/sessions', SessionController.create)
routes.get('/hello', HelloController.index)

//routes.use(auth)

routes.get('/users',UserController.index)
routes.get('/users/:id', UserController.show)
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

routes.get('/users/:user_id/products', ProductsController.index)
routes.post('/users/:user_id/products', ProductsController.create)
routes.put('/users/:user_id/products/:_id', ProductsController.update)
routes.delete('/users/:user_id/repositories/:_id', ProductsController.destroy)



export default routes