import { Auto, Model, ObjectID, Ref } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import { Equipo } from "./Equipo";

@Model({ collection: "Campeonato" })
export class Campeonato {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Property()
  tipo: string;

  @Required()
  @Property()
  fecha_inicio: Date;

  @Required()
  @Property()
  fecha_finalizacion: Date;

  @Required()
  @Property()
  valor_inscripcion: number;

  @Required()
  @Property()
  valor_premio: number;
}