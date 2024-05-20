import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/jugadores")
export class JugadorController{

    @Get("/")
    listjugadores(){
        return "lista jugadores"
    }
}