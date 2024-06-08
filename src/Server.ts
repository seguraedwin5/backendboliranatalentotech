import {join} from "path";
import {Configuration, Inject} from "@tsed/di";
import {PlatformApplication} from "@tsed/common";
import "@tsed/passport"
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/ajv";
import "@tsed/swagger";
import "@tsed/mongoose";
import {config} from "./config/index";
import * as rest from "./controllers/rest/index";
import * as pages from "./controllers/pages/index";
import cookieParser from "cookie-parser";
import cors from 'cors'
import compress from 'compression'
import methodOverride from 'method-override'
import session from "express-session";
import { AuthMiddleware } from "./middlewares";
import bodyParser from "body-parser"

import './protocols/LoginLocalProtocol'

import {Format, Property} from "@tsed/schema";

export class UserInfo {
  @Property()
  id: string;

  @Property()
  @Format("email")
  email: string;

  @Property()
  password: string;
}


@Configuration({
  
  ...config,
  
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE
  disableComponentsScan: true,
  
  ajv: {
    returnsCoercedValues: true
  },
  mount: {
    "/api": [
      ...Object.values(rest)
    ],
    "/": [
      ...Object.values(pages)
    ]
  },
  swagger: [
    {
      path: "/doc",
      specVersion: "3.0.1"
    }
  ],
  
  views: {
    root: join(process.cwd(), "../views"),
    extensions: {
      ejs: "ejs"
    }
  },
  exclude: [
    "**/*.spec.ts"
  ],

  passport : {
    
  }
  

})
export class Server {
  @Inject()
  protected app: PlatformApplication;

  $beforeRoutesInit(){
    this.app
    .use(cors())
      .use(cookieParser())
      .use(methodOverride())
      .use(bodyParser.json())
      .use(
        bodyParser.urlencoded({
          extended : true,
        })
      )
      .use(
        session({
          secret: "mykey",
          resave : true,
        saveUninitialized:true,
      cookie : {
        path : "/",
        httpOnly :true,
        secure:false
      }        
    }));
  }

  @Configuration()
  protected settings: Configuration;
}
