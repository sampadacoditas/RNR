import React from 'react'

export const Checkbox = ({id,type,name,handleClick,isChecked}:any) => {
  console.log(isChecked)
  return (
    <input
    id={id}
    type={type}
    name={name}
    onChange={handleClick}
    checked={isChecked}
    />
  )
}
