import React, { useContext } from "react";

import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import {AuthContext} from '../contexts/AuthContext';
const Login = () => {
  const [text, setText] = useState("");
  const {handleUser,status} = useContext(AuthContext)
  const handleuser = (e) => {
    let { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  const handleCheck = (text) => {
    // axios.post(`https://reqres.in/api/login`,data).then((res)=>{
    //   console.log(res);
    // })

    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    })
      .then((res) => res.json())
      .then((d) => handleUser(d));
  };

  // email: "eve.holt@reqres.in",
  //       password: "cityslicka",

  return (
    <div className={status ? "Show" : "Hide"}>
      <FormControl isRequired>
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input
          id="first-name"
          name="name"
          placeholder="First name"
          onChange={handleuser}
        />
        <FormLabel htmlFor="password">First name</FormLabel>
        <Input
          name="password"
          id="password"
          type="password"
          onChange={handleuser}
          placeholder="Password"
        />
      </FormControl>
      <Button onClick={handleCheck}>Login</Button>
      <div>"email": "eve.holt@reqres.in", "password": "cityslicka"</div>
    </div>
  );
};

export default Login;
