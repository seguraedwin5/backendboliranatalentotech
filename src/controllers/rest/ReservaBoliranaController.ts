import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";

@Controller("/reservas")
export class ReservaBoliranaController{
    @Get("/")
    listreservas(){
        return "list reservas"
    }
}