import React, { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Headers/Header";
import {routes} from "./Admin.data"
import styles from "./Admin.module.scss";
export const Admin = () => {
  const [page,setPage]=useState("SalesDetails")
  const onNavigate=(page:string)=>{
    setPage(page)
    console.log(page)
  }
  const Page=routes[page]
  return (
    <div className={styles.adminContainer}>
      <div>
        <Header />
        <div className={styles.adminSales}>
        <Button buttonText="Sales Details" onClick={()=>onNavigate("SalesDetails")}/>
        </div>
        <div className={styles.adminDistributorScreen}>
        <Button buttonText="Distributor Screen" onClick={()=>onNavigate("DistributorScreen")}/>
        </div>
        <div className={styles.adminSendNotification}>
        <Button buttonText="Send Notification" onClick={()=>onNavigate("SendNotification")}/>
        </div>
      </div>
      <main>
        <Page/>
      </main>
    </div>
  );
};
