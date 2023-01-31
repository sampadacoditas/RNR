import { Notifications } from "../../../Distributor/Notifications/Notifications";
import { Points } from "../../../Distributor/Points/Points";
import { AddDistributor } from "../AddDistributor/AddDistributor";
import { Delete } from "./Delete/Delete";
import { Edit } from "./Edit/Edit";

export const routes:{[key:string]:()=>JSX.Element}={
    // @ts-ignore: Unreachable code error
    "Delete":Delete,
    // @ts-ignore: Unreachable code error
    "Edit":Edit,
    // @ts-ignore: Unreachable code error
    "AddDistributor":AddDistributor
    
}