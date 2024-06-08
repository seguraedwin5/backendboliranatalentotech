import { Get } from "@tsed/schema";
import { Controller, Inject } from "@tsed/di";
import { Mongoose } from "mongoose";
import {MongooseModel}from '@tsed/mongoose'
import { Combo } from "../../models/Combo";

export interface ICombo{
    _id : string,
    nombre : string,
    descripcion : string,
    precio:string,
    imagen:string
}

@Controller("/combos")
export class CombosController{

    @Inject(Combo)
    private combomodel : MongooseModel<Combo>

    @Get("/")
    async listarCombos():Promise<ICombo[]>{

        let combos = this.combomodel.find({})

        return combos;
    }
}