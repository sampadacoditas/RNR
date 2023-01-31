import React, { useState } from "react";
import { Button } from "../../../../components/Button/Button";
import { Modal } from "../../../../components/Modal/Modal";
import { Delete } from "./Delete/Delete";
import { Edit } from "./Edit/Edit";
import style from "./Card.module.scss";
import { routes } from "./DistributorScreen.data";
import { ICard } from "./Card.types";

export const Card = ({ cardDetails }: any) => {
  const [modal, setModal] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [page, setPage] = useState("Delete");
  const [id, setId] = useState("");
  

  function toggleModal(buttonText:any,id?: ICard) {
    setModal(!modal);
    console.log(buttonText);
    setButtonText(buttonText);
    // @ts-ignore
    setId(id);
    console.log(id)
    setPage(buttonText);
    // console.log(page);
  }
  const Page = routes[page];
  console.log(modal);
 
  return (
    <>
      {cardDetails.map((item: any, index: number) => {
       
        return (
          <div className="CardContainer">
            <span>{item.name}</span>
            <Button
              buttonText={"Edit"}
              id={item._id}
              onClick={() => toggleModal("Edit", item._id)}
            />
            

            <Button
              buttonText={"Delete"}
              onClick={() => toggleModal("Delete", item._id)}
              id={item._id}
            />
          </div>
        );
      })}
      <span className={style.addDistributor}>
        <Button
          buttonText={"AddDistributor"}
          onClick={() => toggleModal("AddDistributor")}
        />
        {modal && <Modal
          modal={modal}
          setModal={toggleModal}
          buttonText={buttonText}
          Page={Page}
          id={id}
        />}
      </span>
    </>
  );
};
