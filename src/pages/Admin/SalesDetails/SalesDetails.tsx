import React, { useEffect, useState } from "react";
import { Table } from "../../../components/Table/Table";
import { http } from "../../../Services/Services";

export const SalesDetails = () => {
  const [dataTable, setDataTable] = useState([]);

  // console.log(dataTable)
  useEffect(() => {
    // async function getData()
    // {
    //   const response=await fetch("https://jsonplaceholder.typicode.com/users");
    //   const data=await response.json();
    //   console.log(data)
    //   // return data;
    //   setDataTable(data)
    // }
    // getData()
    // setDataTable(data)
    async function getData()
    {
      try {
        let response = await http.get("user?page=2");
        console.log(response.data[0].rewards);
        setDataTable(response.data);
      } catch (e) {
        console.log("error", e);
      }

    }
    getData()
  }, []);
  const column = [
    
    { heading: "Total Points" },
    { heading: "Live Points" },
    { heading: "Redeemed Points" },
    { heading: "Lapsed Points" },
  ];

  function handleChange(e: any) {}
  return (
    <>
      <div>
        <form>
          <input type="file" onChange={(e) => handleChange(e)} />
          <button type="submit">Upload</button>
        </form>
      </div>
      <Table data={dataTable} column={column} />
    </>
  );
};
