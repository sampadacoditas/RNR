import React from 'react'

export const TableRow = ({item}:any) => {
  // console.log(item.rewards['totalPoints'])
  return (
    <tr>
    <td>{`${item.rewards['totalPoints']}`}</td>
    <td>{`${item.rewards['livePoints']}`}</td>
    <td>{`${item.rewards['redeemedPoints']}`}</td>
    <td>{`${item.rewards['lapsedPoints']}`}</td>
    </tr>
  )
}
// lapsedPoints
