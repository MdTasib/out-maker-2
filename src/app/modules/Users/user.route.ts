import  express  from "express";
import { UserController } from "./user.controller";

const router = express.Router()


router
.post('/',UserController.createUser)
.get('/:id',UserController.getSingleUsers)
.get('/', UserController.getAllUsers)
.patch('/:id', UserController.updateUsers)
.delete('/:id',UserController.deleteUsers)


export const UserRoutes = router; 