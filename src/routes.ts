import {Router} from 'express';
import multer  from 'multer';
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { CreateOrderCategory } from './controllers/order/CreateOrderController';
import { SendOrderController } from './controllers/order/SendOrderController';
import {AddItemController} from './controllers/order/AddItemController'
import { ListOrdersController } from './controllers/order/ListOrdersController';
import {RemoveOrderController} from './controllers/order/RemoveOrderController'
import { DetailOrderController } from './controllers/order/DetailOrderController';
import uploadConfig from './config/multer'
import { FinishOrderController } from './controllers/order/FinishOrderController';
const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

// Rotas de cadastro
router.post('/users', new CreateUserController().handle)
// Rotas de login
router.post('/session',new AuthUserController().handle)

router.get('/me',isAuthenticated, new DetailuserController().handle)

// ROTAS CATEGORY
router.post('/category',isAuthenticated, new CreateCategoryController().handle)

router.get('/category',isAuthenticated, new ListCategoryController().handle)

// ROTAS PRODUCT
router.post('/product',isAuthenticated,upload.single('file'),new CreateProductController().handle)

router.get('/category/product',isAuthenticated,new ListByCategoryController().handle)

// Rotas Order
router.post('/order',isAuthenticated,new CreateOrderCategory().handle)
router.delete('/order',isAuthenticated,new RemoveOrderController().handle)
router.post('/order/add',isAuthenticated, new AddItemController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)
router.put('/order/send',isAuthenticated, new SendOrderController().handle)
router.get('/order',isAuthenticated,new ListOrdersController().handle)
router.get('/order/detail',isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish',isAuthenticated, new FinishOrderController().handle)

export {router};