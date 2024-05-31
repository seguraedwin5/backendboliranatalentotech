import { Controller, Inject } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Get, Post } from "@tsed/schema";
import { BodyParams } from "@tsed/platform-params";
import { Pago } from "../../models";
import { Response } from "express";
import { Res } from "@tsed/common";

@Controller({ path: "/pagos" })
export class PagoController {
  @Inject(Pago) private pagoModel: MongooseModel<Pago>;

  @Post("/") /* Agregamos un pago a la base de datos */ async registrarPago(
    @BodyParams() pagoData: Pago,
    @Res() res: Response
  ): Promise<Response> {
    const nuevoPago = new this.pagoModel(pagoData);
    await nuevoPago.save();
    return res.status(201).json({ message: "Pago registrado correctamente" });
  }
  @Get("/") /* listamos los pagos desde la base de datos */
  async listPagos(): Promise<Pago[]> {
    return this.pagoModel.find({});
  }
}
