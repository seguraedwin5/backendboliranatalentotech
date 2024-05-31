import { Controller, Inject } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Get } from "@tsed/schema";
import { Bolirana, Rol } from "../../models";

@Controller({ path: "/boliranas" })
export class BoliranaController{
  @Inject(Bolirana) private boliranaModel: MongooseModel<Bolirana>

  @Get("/")
  async listBoliranas(): Promise<Bolirana[]> {
    console.log('consultando bolirandas!!');
    return this.boliranaModel.find({});
  }
}