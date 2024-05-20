import {Controller} from "@tsed/di";
import {Get} from "@tsed/schema";

@Controller({path:"/hello" })
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }
}


