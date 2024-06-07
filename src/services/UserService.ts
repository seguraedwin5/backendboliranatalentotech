import { MongooseModel} from "@tsed/mongoose";
import { User } from "../models/User";
import { Inject, Service } from "@tsed/di";
import {AuthService} from './AuthService'
import { info } from "console";

@Service()
export class UserService{

    @Inject(User)
    private userModel : MongooseModel<User>;

    constructor(private authservice:AuthService ){}

    findOne(email:string):any{

        const found = this.userModel.findOne({email:email})//busca email en mongo
        if (found !== null){
            return found
        }

        return null
    }

    verifyPassword(email:string,password:string){
        let hashedpassword = this.authservice.encriptarClave(password);
        console.log(password);
        const found =this.userModel.findOne(
            {"email" : email}
        )

     console.log(found);
    }
}