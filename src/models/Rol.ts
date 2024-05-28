import { Auto, Model, ObjectID } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";

@Model({ collection: "Rol" })
export class Rol {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Property()
  nombre_rol: string;
}