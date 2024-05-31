import { Controller, Inject } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Get } from "@tsed/schema";
import { Reserva } from "../../models";

@Controller({ path: "/reservas" })
export class ReservaController {
  @Inject(Reserva) private reservaModel: MongooseModel<Reserva>;

  @Get("/")
  async listReserva(): Promise<Reserva[]> {
    return this.reservaModel.find({});
  }
}
