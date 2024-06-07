import { Controller, Inject, ProviderScope, Scope } from "@tsed/di";
import { BodyParams, Context } from "@tsed/platform-params";
import { Get, Post } from "@tsed/schema";
import { User, UserLogin } from "../../models";
import { MongooseModel } from "@tsed/mongoose";
import { AuthService } from "../../services/AuthService";
import { Req, UseAuth } from "@tsed/common";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { json } from "body-parser";
import { Authenticate } from "@tsed/passport";


@Controller({
  path: "/users",
})
@Scope(ProviderScope.SINGLETON)
export class UserController {
  @Inject(User)
  private userModel: MongooseModel<User>;

  @Inject()
  private authservice: AuthService
  //metodos
  @Post("/register")
  async register(@BodyParams() user: User): Promise<User> {
    let newuser = {
      ...user,
      password: user.password,
    };
    console.log(newuser);
    const model = new this.userModel(newuser);
    await model.save();
    return model.id;
  }
  // listamos todos los usuarios
 
  @Get("/")
  async getUsers(): Promise<User[]> {
    return await this.userModel.find({});
  }

  
  @Post("/login")
  @Authenticate('login')
  login(
    @Req() req: Req,
    @BodyParams("email") email:string,
    @BodyParams("password") password:string
  ){

    return req.user;
    /*
    let token = this.authservice.generarToken(email,password);
    return JSON.stringify({
      token: token
    })*/
    
  }

}
