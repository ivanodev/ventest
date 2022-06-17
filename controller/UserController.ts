import UserModel from "@src/models/user";
import User from "@src/type/User";
import { hash } from "bcryptjs";
import { Request, Response } from "express";
import AbstractController from "./AbstractController";

interface OperationType {
    operation: string;
}

class UserController extends AbstractController {

    public async create(request: Request, response: Response): Promise<Response> {

        const user = request.body as User;

        if ( user.password )  {

            const hashedPassword = await hash( user.password, 8 );
            user.password = hashedPassword;
        }

        const userCreated = await UserModel.create(user);
        return response.json(userCreated).status(201);
    }

    public async find(request: Request, response: Response): Promise<Response> {

        const users = await UserModel.find();

        return response.json(users).status(200);
    }

    public async findById(request: Request, response: Response): Promise<Response> {

        const { userId } = request.params;
        const user = await UserModel.findById(userId);

        return response.json(user).status(200);
    }

    public async setUserStatus(request: Request, response: Response): Promise<Response> {

        const { userId } = request.params;
        const operationType = request.body as OperationType;

        const isActive = operationType.operation === 'enable' ? true : 'false';

        const userCreated = await UserModel.updateOne({ id: userId }, { $set: { activated: isActive } });

        return response.json(userCreated).status(200);
    }

}

export default UserController;