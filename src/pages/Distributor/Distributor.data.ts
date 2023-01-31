import { Notifications } from "./Notifications/Notifications";
import { Points } from "./Points/Points";

export const routes:{[key:string]:()=>JSX.Element}={
    "Points":Points,
    "Notifications":Notifications
}