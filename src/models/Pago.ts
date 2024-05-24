import { Auto, Model, ObjectID } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";

@Model({ collection: "Pago" })
export class Pago {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Property()
  bolirana: boolean;

  @Required()
  @Property()
  valor: number;

  @Required()
  @Property()
  tipo_pago: string;
}