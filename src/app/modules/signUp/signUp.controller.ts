import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "../Users/user.interface";
import { Request, Response } from "express";
import { SignupService } from "./signUp.service";

const createUser = catchAsync(
    async (req: Request, res: Response) => {
        const userData = req.body;
        const result = await SignupService.createUser(userData)

        sendResponse<IUser>(res,{
            statusCode: httpStatus.OK,
            success : true,
            message : "User created successfully",
            data : result
        })
    }
)


export const SignupController ={
    createUser
}