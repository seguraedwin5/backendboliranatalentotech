import { Controller, Inject,  } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Post,  } from "@tsed/schema";
import { User, UserLogin } from "../../models";
import {  MongooseModel } from "@tsed/mongoose";
import { AuthService } from "../../services/AuthService";
import { AccessData } from "../../models/AccessData";



@Controller({
    path: "/users"
})
export class UserController{
    
    @Inject(User) 
    private userModel: MongooseModel<User>
    
    constructor(private authservice:AuthService){

    }
    //metodos
    @Post("/register")
    async register(@BodyParams() user:User):Promise<User>{
        let newuser = {...user, password:this.authservice.encriptarClave(user.password)}
        console.log(newuser);
        const model = new this.userModel(newuser);
        await model.save();
        return model.id;
    }

    @Post("/login")
    async login(@BodyParams() userlogin:UserLogin):Promise<AccessData>{
        
        let userfind = await this.userModel.findOne({email:userlogin.email}).exec();
        var token = this.authservice.generarToken(userlogin.email,userlogin.password);
        return {
            token : token,
            data: {
                id:userfind?.id,
                name:userfind?.name,
                email:userfind?.email
            }
        }
        
    }
    
}