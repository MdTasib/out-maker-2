import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.Service";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";
import httpStatus from "http-status";

const createUser = catchAsync(
    async (req: Request, res: Response) => {
        const userData = req.body;
        const result = await UserService.createUser(userData)

        sendResponse<IUser>(res,{
            statusCode: httpStatus.OK,
            success : true,
            message : "User created successfully",
            data : result
        })
    }
)

const getAllUsers = catchAsync(
    async (req: Request, res: Response) => {
        const result = await UserService.getAllUsers()

        sendResponse<IUser[]>(res,{
            statusCode: httpStatus.OK,
            success : true,
            message : "Users retrieved successfully",
            data: result
        })
    }
)
const getSingleUsers = catchAsync(
    async (req: Request, res: Response) => {
        const {id} = req.params;
        const result = await UserService.getSingleUsers(id)

        sendResponse<IUser>(res,{
            statusCode: httpStatus.OK,
            success : true,
            message : "User retrieved successfully",
            data : result
        })
    }
)

const updateUsers = catchAsync(
    async (req: Request, res: Response) => {
        const {id} = req.params;
        const updatedData = req.body
        const result = await UserService.updateUsers(id,updatedData)

        sendResponse<IUser>(res,{
            statusCode: httpStatus.OK,
            success : true,
            message : "User updated successfully",
            data : result
        })
    }
)
const deleteUsers = catchAsync(
    async (req: Request, res: Response) => {
        const {id} = req.params;
        const result = await UserService.deleteUsers(id)

        sendResponse<IUser>(res,{
            statusCode: httpStatus.OK,
            success : true,
            message : "User Deleted successfully",
            data : result
        })
    }
)


export const UserController ={
    createUser,
    getAllUsers,
    getSingleUsers,
    updateUsers,
    deleteUsers
}