import { Controller } from "@tsed/di";
import { BodyParams, Context } from "@tsed/platform-params";
import { Get, Post, Security } from "@tsed/schema";
import { Jugador}  from '../../models/Jugador'
import { JugadoresService } from "../../services/JugadoresService";
import { Use, UseAuth, UseBefore } from "@tsed/platform-middlewares";
import { AuthMiddleware } from "../../middlewares/AuthMiddleware";
import { In } from "@tsed/schema"; 
import { Authorize } from "@tsed/passport";




@Controller("/jugadores")


export class JugadorController{

    constructor(private jugadoresservice: JugadoresService){
    }

    //metodo para listar jugadores
    
    @Get("/")
    @Authorize()
    listjugadores(@Context() ctx:Context){
        return this.jugadoresservice.listJugadores();
    }

    @Post("/")
    addJugador(@BodyParams() jugador : Jugador){
        return this.jugadoresservice.addJugador(jugador);
    }


}