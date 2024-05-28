import { Auto, Model, ObjectID, Ref } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";

@Model({ collection: "Equipo" })
export class Equipo {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Property()
  nombre: string;

  @Required()
  @Property()
  ubicacion: string;
}