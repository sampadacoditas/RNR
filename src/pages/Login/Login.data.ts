// import { JsxElement } from "typescript"
import { Admin } from "../Admin/Admin"
import { Distributor } from "../Distributor/Distributor"
import { Login } from "./Login"

export const  routes:{[key:string]:()=>JSX.Element}={
    // "Login":Login,
    "Admin":Admin,
    "Distributor":Distributor
}
