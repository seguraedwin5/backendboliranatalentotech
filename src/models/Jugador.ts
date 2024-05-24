import { Auto, Model, ObjectID, Ref } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import { User } from "./User";
import { Equipo } from "./Equipo";

@Model({ collection: "Jugadores" })
export class Jugador {
  @Property()
  @Auto(true)
  @ObjectID("id")
  _id: string;

  @Required()
  @Ref(User)
  @Property()
  id_usuario: Ref<User>;

  @Required()
  @Ref(Equipo)
  @Property()
  id_equipo: Ref<Equipo>;

  @Required()
  @Property()
  avatar: string;
}