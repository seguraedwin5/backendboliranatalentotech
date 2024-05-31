import { Controller, Inject } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Get } from "@tsed/schema";
import { Rol } from "../../models";

@Controller({ path: "/roles" })
export class RolController {
  @Inject(Rol) private rolModel: MongooseModel<Rol>

  @Get("/")
  async listRoles(): Promise<Rol[]> {
    return this.rolModel.find({});
  }
}