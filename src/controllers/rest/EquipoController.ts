import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/equipos")
export class EquipoController{

    @Get("/")
    listarequipos(){
        return "lista equipos"
    }
}