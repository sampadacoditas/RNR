import React, { useState } from 'react'
import { Button } from '../../../../components/Button/Button'
import { Modal } from '../../../../components/Modal/Modal'
import { http } from '../../../../Services/Services'
import style from "./AddDistributor.module.scss"
import { IAddDistributor } from './AddDistributor.types'
export const AddDistributor = ({toggleModal,modal,Page}:IAddDistributor) => {
  const [data,setData]=useState({
    name:"",
    email:""
  })
  async function submitForm(e:any)
  {
    e.preventDefault();
    try{
      const response=await http.post("auth/addDistributor",{
        name:data.name,
        email:data.email
      })
      console.log(response)

    }
    catch{
      console.log(e)
    }
  }
  function handleOnChange(e:any)
  {
    const newData={...data};
    // @ts-ignore: Unreachable code error
    newData[e.target.name]=e.target.value;
    setData(newData)
    console.log(newData)
  }
  
  return (
    <>
      <Modal modal={modal} setModal={toggleModal} Page={Page}/>
      <form onSubmit={(e)=>submitForm(e)}>
      <div className={style.Edit}>
        <label htmlFor="name">Name</label>
        <input 
        type="text" 
        name="name" 
        value={data.name}
        id="name"
        onChange={(e)=>handleOnChange(e)}
        required />
        <label htmlFor="email">email</label>
        <input type="text" 
        name="email" 
        value={data.email} 
        id="email"
        onChange={(e)=>handleOnChange(e)}
        required/>
        <button>Submit</button>
      </div>
     </form>
    </>
   
  )
}
