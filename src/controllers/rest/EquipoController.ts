import { Controller, Inject } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Get, Post } from "@tsed/schema";
import { BodyParams } from "@tsed/platform-params";
import { Equipo } from "../../models";
import { Response } from "express";
import { Res } from "@tsed/common";

@Controller({ path: "/equipos" })
export class EquipoController {
  @Inject(Equipo) private equipoModel: MongooseModel<Equipo>;

  @Post("/") /* agregamos un equipo a la base de datos */ async listarequipos(
    @BodyParams() equipoData: Equipo,
    @Res() res: Response
  ): Promise<Response> {
    const nuevoEquipo = new this.equipoModel(equipoData);
    await nuevoEquipo.save();
    return res.status(201).json({ message: "Equipo agregado correctamente" });
  }
  @Get("/") /* listamos los equipos desde la base de datos */
  async listEquipos(): Promise<Equipo[]> {
    return this.equipoModel.find({});
  }
}
