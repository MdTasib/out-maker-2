import httpStatus from "http-status"
import ApiError from "../../../error/ApiError"
import { IUser } from "../Users/user.interface"
import { User } from "../Users/user.model"

const createUser = async (
    user: IUser
): Promise<IUser | null> => {
  
    if(user.role === 'seller' && (user.budget !== 0 || user.income !== 0)){
        throw new ApiError(httpStatus.BAD_REQUEST, "seller can't set initially budget and income")
      }
    
      if(user.role === 'buyer' && (user.income !== 0 || user.budget <= 0)){
        throw new ApiError(httpStatus.BAD_REQUEST, "buyer set budget value but can't set initially income value")
      }
    
    const result = await User.create(user)
    return result
}


export const SignupService ={
    createUser
}