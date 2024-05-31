import { Controller, Inject } from "@tsed/di";
import { BodyParams, Context } from "@tsed/platform-params";
import { Get, Post } from "@tsed/schema";
import { User, UserLogin } from "../../models";
import { MongooseModel } from "@tsed/mongoose";
import { AuthService } from "../../services/AuthService";
import { AccessData } from "../../models/AccessData";

@Controller({
  path: "/users",
})
export class UserController {
  @Inject(User)
  private userModel: MongooseModel<User>;

  constructor(private authservice: AuthService) {}
  //metodos
  @Post("/register")
  async register(@BodyParams() user: User): Promise<User> {
    let newuser = {
      ...user,
      password: this.authservice.encriptarClave(user.password),
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
  async login(
    @Context() ctx: Context,
    @BodyParams() userlogin: UserLogin
  ): Promise<AccessData> {
    let userfind = await this.userModel
      .findOne({ email: userlogin.email })
      .exec();
    var token = this.authservice.generarToken(
      userlogin.email,
      userlogin.password
    );
    ctx.response.cookie("token", token, {
      httpOnly: true,
      expires: new Date("2024-05-24"),
    });
    return {
      token: token,
      data: {
        id: userfind?.id,
        name: userfind?.name,
        email: userfind?.email,
      },
    };
  }
}
