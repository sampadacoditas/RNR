import { Admin } from "../Admin/Admin";
import { Distributor } from "../Distributor/Distributor";
import { Login } from "../Login/Login";

export const routes:{[key:string]:()=>JSX.Element}={
    // @ts-ignore
    "Login":Login,
    "Admin":Admin,
    "Distributor":Distributor
}