import React from 'react'
import styles from "./Table.module.scss"
import { TableHeadItem } from "./TableHeadItem/TableHeadItem"
import { TableRow } from './TableRow/TableRow'
export const Table = ({data,column}:any) => {
    console.log(data)
  return (
    <table className={styles.table}>
        <thead>
            <tr>
                {column.map((item:any,index:any)=>
                     <TableHeadItem item={item}/>
                )}
            </tr>
        </thead>
        <tbody>
            
            {data.map((item:any,index:number)=>
            <TableRow item={item}/>)}
            {/* <tr>
                <td>john</td>
                <td>john</td>
                <td>john</td>
                <td>john</td>
            </tr> */}
        </tbody>
    </table>
  )
}
