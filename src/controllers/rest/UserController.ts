import { Controller, Inject, Injectable } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post } from "@tsed/schema";
import { User } from "../../models/User";
import { MongooseModel } from "@tsed/mongoose";

export interface UserRegister{
    
    nombre : string
    correo : string
    telefono : string
    password : string
}


@Controller({
    path: "/users"
})
export class UserController{
    
    @Inject(User) 
    private userModel: MongooseModel<User>
    
    //metodos
    @Post("/register")
    async register(@BodyParams() user:User):Promise<User>{
        const model = new this.userModel(user);
        await model.save();
        return model;
    }

    @Post("/login")
    async login(@BodyParams() user:User):Promise<User>{
        const model = new this.userModel(user);
        await model.save();
        return model;
    }
}