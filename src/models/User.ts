
import { Auto, Model, ObjectID, Unique  } from "@tsed/mongoose";  
import { Description, Email, MinLength, Property, Required , } from "@tsed/schema";



@Model({collection:"Users"})

export class User{
  
    @Property()
    @Auto(true)
    @ObjectID("id")
    _id:string

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





