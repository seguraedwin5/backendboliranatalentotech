
import { Model } from "@tsed/mongoose";
import { Email, Property } from "@tsed/schema";

@Model()
export class UserLogin{
    @Email()
    email:string

    @Property()
    password:string
}