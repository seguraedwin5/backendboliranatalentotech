import { Email, Required } from "@tsed/schema"

export class Credenciales{

    @Email()
    @Required()
    email : string

    @Required()
    password : string
}