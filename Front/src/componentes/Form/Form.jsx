import React from "react";
import styled from "styled-components";
import Validation from "./Validation";
import { useState } from "react";


const Wall = styled.form`
  margin: 25px 500px;
  padding: 80px 30px;
  background: papayawhip;
`;
const Label = styled.label`
  margin: 20px 20px;
`;
const Input = styled.input`
  margin: 20px 20px;
`;

const Button = styled.button`
  margin: 20px;
`;

export default function Form({login}){
  
const [ userData, setUserData] = useState({
  username: "",
  password : ""
})
   
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  }); 

  const handleInputChange= (event) => {
    setUserData({
      ...userData,
      [event.target.name] : event.target.value
    });

    setErrors(Validation({
        ...userData,
      [event.target.name] : event.target.value
      }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <Wall onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="username">Enter your E-mail - User: </Label>
        <Input type="email" name="username" value={userData.username} onChange={handleInputChange}/>
        {errors.username && <p style={{color:"red"}}>{errors.username}</p>}
      </div>
      <div>
        <Label htmlFor="pwd">Enter your Password: </Label>
        <Input type="password" name="password" value={userData.password} onChange={handleInputChange}/>
        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
      </div>
      <div>
        <Button> LOGIN </Button>
      </div>
    </Wall>
  );
};