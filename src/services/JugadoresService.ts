import { Service, Inject} from "@tsed/di";
import { MongooseModel } from "@tsed/mongoose";
import { Jugador } from "../models/Jugador";


@Service()
export class JugadoresService{

    @Inject(Jugador)
    private jugadorModel : MongooseModel<Jugador>;

    listJugadores():Promise<Jugador[]>{
        return this.jugadorModel.find({});
    }
    
    addJugador(jugador:Jugador){
        const jugadormodel = new this.jugadorModel(jugador);
        jugadormodel.save();
        return jugadormodel;
    }
}