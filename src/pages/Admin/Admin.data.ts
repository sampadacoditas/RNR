import { DistributorScreen } from "./DistributorScreen/DistributorScreen"
import {SalesDetails} from "./SalesDetails/SalesDetails"
import { SendNotification } from "./SendNotification/SendNotification"

export const routes:{[key:string]:()=>JSX.Element}={
    "SalesDetails":SalesDetails,
    "DistributorScreen":DistributorScreen,
    "SendNotification":SendNotification
}