import { Controller, Inject, Injectable } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post } from "@tsed/schema";
import { User } from "../../models/UserModel";
import { MongooseModel } from "@tsed/mongoose";

@Injectable()
@Controller({
    path: "/users"
})
export class UserController{
    
    @Inject(User) private User: MongooseModel<User>
    //metodos
    @Post("/register")
    async register(@BodyParams() user:User):Promise<User>{
        const model = new this.User(user);
        await model.save();
        return model;
    }
}