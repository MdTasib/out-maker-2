import httpStatus from "http-status"
import ApiError from "../../../error/ApiError"
import { IUser } from "./user.interface"
import { User } from "./user.model"


const createUser = async (
    user: IUser
): Promise<IUser | null> => {

  if(user.role === 'seller' && (user.budget !== 0 || user.income !== 0)){
    throw new ApiError(httpStatus.BAD_REQUEST, "seller can't set initially budget and income")
  }

  if(user.role === 'buyer' && (user.income !== 0 || user.budget <= 0)){
    throw new ApiError(httpStatus.BAD_REQUEST, "buyer set budget value but can't set initially income value")
  }

    const userCreated = await User.create(user)
    if(!userCreated){
        throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create user")
    }
    return userCreated
}

const getAllUsers = async (): Promise<IUser[] | null> => {
    const result = await User.find({})
    return result
}

const getSingleUsers = async (id: string): Promise<IUser | null> => {
    const result = await User.findById({ _id: id })
    return result
}

const updateUsers = async (id: string, payload: Partial<IUser>): Promise<IUser | null> => {
    const result = await User.findByIdAndUpdate(
        { _id: id },
        payload,
        {new: true,}
    );
    return result;
}
const deleteUsers = async (id: string): Promise<IUser | null> => {
    const result = await User.findByIdAndDelete(id, { new: true })
    return result;
}



export const UserService = {
    createUser,
    getAllUsers,
    getSingleUsers,
    updateUsers,
    deleteUsers
}