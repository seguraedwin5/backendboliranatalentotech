import { Service } from "@tsed/di";
import jwt from 'jsonwebtoken'
import { AES } from "crypto-ts";

@Service()
export class AuthService{

    private KEY = process.env.JWT_KEY || ""

    generarToken(usuario:string, clave:string){
       const token = jwt.sign({usuario:usuario, clave:clave},this.KEY, {subject:usuario, expiresIn:"1h"});
       console.log(token)
       return token
    }

    validarToken(token:string){
        const decoded =jwt.verify(token,this.KEY,(err,decoded)=>{
            console.log(decoded);
        });
        
    }

    encriptarClave(password:string){
        let clave_encriptada = AES.encrypt(password,"key");
        console.log(clave_encriptada)
        return clave_encriptada.toString();
    }

    findOne(id:any){
        console.log(id)
    }
}