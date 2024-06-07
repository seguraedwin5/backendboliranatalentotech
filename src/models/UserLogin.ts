
import { Email, Format, Property } from "@tsed/schema";


export class UserLogin{
    @Property()
    id:string;

    @Property()
    @Format("email")
    email:string

    @Property()
    password:string

    
}
