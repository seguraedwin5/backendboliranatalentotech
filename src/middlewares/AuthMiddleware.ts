import { Unauthorized } from "@tsed/exceptions";
import { Middleware, Err, Next, MiddlewareMethods} from "@tsed/common";
import { Context } from "@tsed/platform-params";
import jwt from 'jsonwebtoken'


@Middleware({priority : -1})
export class AuthMiddleware implements MiddlewareMethods{
    public use(@Context() ctx:Context, @Err() err: unknown) {
        console.log("Error ====>" +err)
        const authheader = ctx.request.headers.authorization
        const key = process.env.JWT_KEY || "";
        
        //validar si hay auth header
        if (authheader){
            //obtener token
            const token = authheader.split(' ')[1]
            console.log("token en middleware " + token);
            ctx.logger.info({tokenrecib:token})
            const payload = jwt.verify(token, key);
            if(!payload){
                return new Unauthorized("El token no es valido")
            }
            ctx.next();
            
            
        }else{
            return new Unauthorized("no hay token en la solicitud")
        }

        
        
        
    }

}