import { Controller } from "@tsed/di";
import { BodyParams, Context } from "@tsed/platform-params";
import { Get, Post } from "@tsed/schema";
import { Jugador}  from '../../models/Jugador'
import { JugadoresService } from "../../services/JugadoresService";
import { $log } from "@tsed/logger";

@Controller("/jugadores")
export class JugadorController{

    constructor(private jugadoresservice: JugadoresService){
    }

    //metodo para listar jugadores
    @Get("/")
    listjugadores(@Context() ctx:Context){
        let token= ctx.request.cookies.token
        ctx.logger.info({tokenrec: token})
        console.log('token recibido: ' +token)
        return this.jugadoresservice.listJugadores();
    }

    @Post("/")
    addJugador(@BodyParams() jugador : Jugador){
        return this.jugadoresservice.addJugador(jugador);
    }


}