import { Auto, Model, ObjectID } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";

@Model({ collection: "Bolirana" })
export class Bolirana {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Property()
  descripcion: string;

  @Required()
  @Property()
  tipo: string;

  @Required()
  @Property()
  estado: string;
}