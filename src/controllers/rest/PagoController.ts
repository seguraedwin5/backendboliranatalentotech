import { Controller } from "@tsed/di";
import { Post } from "@tsed/schema";

@Controller("/pagos")
export class PagoController{

    @Post("/")
    crearpago(){
        return "pago realizado"
    }
}