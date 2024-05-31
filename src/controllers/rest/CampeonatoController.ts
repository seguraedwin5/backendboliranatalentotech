import { Controller, Inject } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Get } from "@tsed/schema";
import { Campeonato } from "../../models";

@Controller({ path: "/campeonatos" })
export class CampeonatoController{
  @Inject(Campeonato) private CampeonatoModel: MongooseModel<Campeonato>

  @Get("/")
  async listCampeonatos(): Promise<Campeonato[]> {
    console.log('consultando Campeonatos!!');
    return this.CampeonatoModel.find({});
  }
}