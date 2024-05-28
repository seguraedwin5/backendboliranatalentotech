import { Auto, Model, ObjectID } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";

@Model({ collection: "Reserva" })
export class Reserva {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Property()
  fecha: Date;

  @Required()
  @Property()
  hora: string;
}