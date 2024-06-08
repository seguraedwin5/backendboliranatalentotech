import { Controller, Inject } from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Delete, Get, Post } from "@tsed/schema";
import { BodyParams, PathParams } from "@tsed/platform-params";
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
  @Get("/")
  async listEquipos(): Promise<any[]> {
    const equipos = await this.equipoModel.find({});
    const equiposConIdString = equipos.map((equipo) => ({
      ...equipo.toObject(),
      _id: equipo._id.toString(),
    }));
    return equiposConIdString;
  }

  @Delete("/:id")
  async eliminarEquipo(
    @PathParams("id") id: string,
    @Res() res: Response
  ): Promise<Response> {
    try {
      const equipo = await this.equipoModel.findByIdAndDelete(id);
      if (!equipo) {
        return res.status(404).json({ message: "Equipo no encontrado" });
      }
      return res
        .status(200)
        .json({ message: "Equipo eliminado correctamente" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al eliminar el equipo" });
    }
  }
}
