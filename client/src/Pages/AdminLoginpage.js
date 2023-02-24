import React from "react";
import styled from "styled-components";
import adlog from "../images/adlog.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const AdminLoginpage = () => {
  const navigate = useNavigate();

  const myStyle = {
    backgroundImage: `url(${adlog})`,
    height: "100vh",
    marginTop: "-70px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin123") {
      navigate("/admhome");
    }else{
    alert('Invalid Credentials❌')
    }
  };

  return (
    <Wrapper style={myStyle}>
      <div className="seventy">
        <Form onSubmit={handleSubmit}>
          <Input
            type="username"
            placeholder="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button type="submit">Log In</Button>
        </Form>
      </div>
    </Wrapper>
  );
};
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 40%;
  border-radius: 20px;
  border-radius: 50px;
  box-shadow: 35px -35px 72px #333, -35px 35px 72px #333;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    background-color: #0062cc;
  }
`;
const Wrapper = styled.div`
  height: 100vh;
  background-color: #333;
  display: flex;
  .seventy {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 60%;
    height: 100%;
    margin-top: 70px;
  }
`;
export default AdminLoginpage;
