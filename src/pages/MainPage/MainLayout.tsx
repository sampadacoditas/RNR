import React, { useState } from 'react'
import { Login } from '../Login/Login';
import { routes } from './MainRoutes.data';

export const MainLayout = () => {
    const [page,setPage]=useState("Admin")
      
      const onNavigate = (page: string) => {
        setPage(page);
        console.log(page);
      };
      const Page = routes[page];
  return (
    <>
    {page==="Login"&& <Login onNavigate={onNavigate}/>}
    {page !=="Login"  &&   <Page />}
    </>
  )
}
