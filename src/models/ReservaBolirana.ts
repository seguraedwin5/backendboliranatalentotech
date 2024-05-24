import { Auto, Model, ObjectID, Ref } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import { Reserva } from "./Reserva";
import { User } from "./User";
import { Pago } from "./Pago";
import { Bolirana } from "./Bolirana";

@Model({ collection: "ReservaBolirana" })
export class ReservaBolirana {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Ref(Reserva)
  @Property()
  id_reserva: Ref<Reserva>;

  @Required()
  @Ref(User)
  @Property()
  usuario: Ref<User>;

  @Required()
  @Ref(Pago)
  @Property()
  pago: Ref<Pago>;

  @Required()
  @Ref(Bolirana)
  @Property()
  id_bolirana: Ref<Bolirana>;

  @Required()
  @Property()
  estadopago: string;
}