import express from 'express'
import { UserRoutes } from '../modules/Users/user.route';
import { CowRoutes } from '../modules/Cow/cow.route';
import { OrderRoutes } from '../modules/orders/order.route';
import { SignupRoutes } from '../modules/signUp/signUp.route';
const router = express.Router()

const moduleRoutes = [
    {
      path: '/users',
      route: UserRoutes,
    },
    {
      path: '/cows',
      route: CowRoutes,
    },
    {
      path: '/orders',
      route: OrderRoutes,
    },
 
    {
      path: '/auth',
      route: SignupRoutes,
    },
 
  ];
  
  moduleRoutes.forEach(route => router.use(route.path, route.route));

  export default router

