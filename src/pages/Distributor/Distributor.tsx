import React, { useState } from 'react'
import { Button } from '../../components/Button/Button'
import {routes} from "./Distributor.data"
import style from "./Distributor.module.scss"
import { Notifications } from './Notifications/Notifications'
export const Distributor = () => {
    const [page,setPage]=useState("Points")
    const onNavigate=(page:string)=>
    {
        setPage(page);
        window.history.pushState({}, "", `/${page}`);
    }
    const Page=routes[page]

  return (
    <>
    <div className={style.DistributorButton}>
    <Button buttonText={'Notifications'} onClick={()=>onNavigate("Notifications")} />
    <Button buttonText={'Points'} onClick={()=>onNavigate("Points")} />
    
    </div>
    <div className={style.distributor}>
    <Page/>
    </div>
    </>
  )
}
