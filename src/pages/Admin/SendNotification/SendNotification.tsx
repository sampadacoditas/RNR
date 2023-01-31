import { link } from 'fs';
import React, { useEffect, useState } from 'react'
import { Checkbox } from './Checkbox/Checkbox'
import styles from "./SendNotification.module.scss"
export const SendNotification = () => {
  const [isCheckAll,setIsCheckAll]=useState(false);
  const [isCheck, setIsCheck]=useState([]);
  const [list, setList] = useState([]);


  // const [distributorsName,setDistributorsName]=useState([])
  useEffect(()=>{
    async function getData()
    {
      const response=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await response.json();
      // setDistributorsName(data)
      setList(data)
    }
    getData()
  },[])

  const handleOnClick=()=>
  {
   
  }
  const handleSelectAll=(e:any)=>{
    setIsCheckAll(!isCheckAll);
    // @ts-ignore: Unreachable code error
    setIsCheck(list.map(item=>item.id))
    if(isCheckAll)
    {
      setIsCheck([]);
    }
  }

  const handleClick=(e:any)=>{
    const {id,checked}:any=e.target;
    console.log(id,checked)
    // @ts-ignore: Unreachable code error
    setIsCheck([...isCheck,id])
    if(!checked)
    {
      setIsCheck(isCheck.filter(item=>item!==id))
    }
  }
 {console.log(isCheck)}
  return (
    <>
    {
     list.map(({id,name}:any)=>{
        return (  
          <div>
          <Checkbox 
          key={id} 
          id={id} 
          type="checkbox" 
          name={name} 
          handleClick={handleClick} 
           // @ts-ignore: Unreachable code error
          isChecked={isCheck.includes(id)}
          />
          {name}
          </div>
        )
      })
    }
  
   <Checkbox type="checkbox" 
   name="selectAll" 
   id="selectAll"
   handleClick={handleSelectAll}
   isChecked={isCheckAll}
   />selectAll 
  
   <input type="text" className={styles.message} placeholder='Type Message here'/>
   </> 
  )
}
