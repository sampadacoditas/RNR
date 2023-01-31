import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { routes } from "./Login.data";
import styles from "./Login.module.scss";
import { Admin } from "../Admin/Admin";
import { ILoginProps } from "./Login.types";
import { type } from "@testing-library/user-event/dist/type";
import { http } from "../../Services/Services";
import { redirect } from "react-router-dom"
export const Login = ({onNavigate}:any) => {
  const [heading, setHeading] = useState("Login");
  const [buttonText, setButtonText] = useState("Login");
  // const [page, setPage] = useState("Admin");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [Entry, setEntry] = useState([]);
  
const submitForm = async(event: any) => {
    event.preventDefault();
    let storeEntry = { username: username, password: password };
    // @ts-ignore: Unreachable code error
    setEntry([storeEntry]);
    console.log(storeEntry);
    try{let responseLogin=await http.post("auth/login",storeEntry);
    console.log(responseLogin)    
    console.log(responseLogin.data.roleId)
        // response=response1;  

        if(responseLogin.data.roleId==="6345399a37b3c3c3d5dea5a8")
        {
          onNavigate('Admin')
        }
        else{
          onNavigate('Admin')
        }
    }
    catch(e)
    {
        console.log("error",e)
    }
  };
  return (
    <div className={styles.loginContainer}>
      <Heading heading={heading} />
      <div className={styles.loginContainerChild1}>
        <form className={styles.loginForm} 
        onSubmit={submitForm}>
          <label htmlFor="userName">
            UserName
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <Button
            buttonText={buttonText}
          />
        </form>
      </div>
      <div>
      {/* {
        
        response.ok===true?<Page/>:""
        // console.log(page)}
      } */}
      </div>
    </div>
  );
};
