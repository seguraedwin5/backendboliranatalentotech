import { Controller } from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import { Get, Post } from "@tsed/schema";
import { Jugador}  from '../../models/Jugador'
import { JugadoresService } from "../../services/JugadoresService";

@Controller("/jugadores")
export class JugadorController{

    constructor(private jugadoresservice: JugadoresService){
    }

    //metodo para listar jugadores
    @Get("/")
    listjugadores(){
        return this.jugadoresservice.listJugadores();
    }

    @Post("/")
    addJugador(@BodyParams() jugador : Jugador){
        return this.jugadoresservice.addJugador(jugador);
    }


}