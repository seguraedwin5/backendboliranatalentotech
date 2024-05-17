import { Injectable } from "@tsed/di";
import { Model, ObjectID  } from "@tsed/mongoose";  
import { Email, Property, Required , } from "@tsed/schema";



@Model({collection:"Users"})
export class User{
    @ObjectID("id")
    _id : string

    @Required()
    nombre:string

    @Email()
    @Property()
    correo:string

    @Required()
    password:string


}





