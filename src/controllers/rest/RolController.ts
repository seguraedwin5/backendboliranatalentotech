import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/roles")
export class RolController{

    @Get("/")
    listroles(){
        return "lista roles"
    }
}