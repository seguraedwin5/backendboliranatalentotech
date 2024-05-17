import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }
}

//listar clientes
@Controller("/clientes")
export class ClientesController {
  @Get("/")
  listarclientes() :string[]{
    let clientes = ['juan', ' oscar', 'edwin', 'gabriel']
    
    return clientes;
  }
}
