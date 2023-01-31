import React, { useEffect, useState } from 'react'
import { http } from '../../../Services/Services';
import { routes } from '../Admin.data';
import {  AddDistributor } from './AddDistributor/AddDistributor';
import { Card } from './Card/Card';

export const DistributorScreen = () => {
  const [cardDetails,setCardDetails]=useState([])
  // const [id,setId]=useState([])

  useEffect(()=>{
    async function getData()
    {
      const data=await http.get("user?page=2");
      console.log(data.data)
      setCardDetails(data.data)
    }
    getData()
  },[])
  // console.log(id);
  return (
    <>
      <Card cardDetails={cardDetails} />
     
    </>
  )
}
