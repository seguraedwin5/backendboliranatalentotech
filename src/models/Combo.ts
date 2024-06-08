import { Model, ObjectID } from "@tsed/mongoose";
import { Property } from "@tsed/schema";

@Model({collection:"Combos"})
export class Combo{
    
    @ObjectID()
    _id: string

    @Property()
    nombre:string

    @Property()
    descripcion:string

    @Property()
    precio:string

    @Property()
    imagen:string

}