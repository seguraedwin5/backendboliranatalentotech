import { Injectable } from "@tsed/di";
import { Auto, ExcludeIndexes, Model, ObjectID  } from "@tsed/mongoose";  
import { Email, MinLength, Property, Required , } from "@tsed/schema";



@Model({collection:"Users"})

export class User{
  
    @ExcludeIndexes(true)
    @Auto(true)
    @ObjectID()
    _id : string

    @Required()
    name:string

    @Email()
    @Required()
    email:string

    @MinLength(7)
    @Property()
    phone:string

    @Required()
    password:string

    

}





