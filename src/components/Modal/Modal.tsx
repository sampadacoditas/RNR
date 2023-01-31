import React, { useState } from "react";
import { Admin } from "../../pages/Admin/Admin";
import { Card } from "../../pages/Admin/DistributorScreen/Card/Card";
import { routes } from "../../pages/Admin/DistributorScreen/Card/DistributorScreen.data";
import styles from "./Modal.module.scss";
import { IModal } from "./Modal.types";
export const Modal = ({modal,setModal,buttonText,Page,id}:IModal) => {
  // console.log(id)
  // console.log(buttonText)
    function toggleModal()
    {
      console.log(modal)
      setModal(!modal)
    }
    // const [page,setPage]=useState("Delete")
    //  const onNavigatePage=(page:string)=>{
    //   setPage(page)
    // }
    // // buttonText && onNavigatePage(buttonText)
    // const Page=routes[page];
    
  return (
    <>
    {
      modal &&
      <div className={styles.modalBackground}>
      <div className={styles.overlay}>
        <div className={styles["modal-content"]}>
          {<Page id={id}/>}
          <button className={styles["close-btn"]} onClick={toggleModal}>CLOSE</button>
        </div>
      </div>
    </div>
    }
    
    </>
  );
};
