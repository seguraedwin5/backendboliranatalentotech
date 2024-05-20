import { Auto, Model, ObjectID } from "@tsed/mongoose";
import { Property } from "@tsed/schema";

@Model({collection:"Jugadores"})
export class Jugador{
    @Auto(true)
    @ObjectID('id')
    _id:string

    @Property()
    name:string
}