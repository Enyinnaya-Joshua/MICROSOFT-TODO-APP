import React, { useState, useContext } from "react";
import styled from "styled-components";
import img from "../assets/micro.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { GlobalContext } from "../context/mainContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showeye, setShoweye] = useState(false);
  const { setCurrentUser, currentUser } = useContext(GlobalContext);

  const navigate = useNavigate();

  const RegisterUser = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);

        window.localStorage.setItem("useData", JSON.stringify(res.data.data));

        navigate("/home");
      });
  };

  const show = () => {
    setShoweye(!showeye);
  };

  const verify = () => {
    navigate("/");
  };

  return (
    <Container>
      <Card onSubmit={RegisterUser}>
        <Title>
          <Name>OJUTU. TO-DO</Name>
        </Title>
        <Sign>Create Account</Sign>
        <Namein
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          required
          placeholder="Name"
        />
        <Namein
          value={email}
          type="email"
          required
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Password>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={showeye ? "text" : "password"}
            required
            placeholder="Password"
          />
          <Icon onClick={show}>
            {showeye ? <AiFillEye /> : <AiFillEyeInvisible />}
          </Icon>
        </Password>
        <Signup>
          <Noacc>
            {" "}
            <span>Use a phone number instead</span>
          </Noacc>
        </Signup>

        <Buttonhold>
          <Button2 type="submit">Next</Button2>
        </Buttonhold>
      </Card>
    </Container>
  );
};

export default SignUp;

const Icon = styled.div`
  margin: 0px;
  padding: 0px;
  width: 70px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Password = styled.div`
  height: 40px;
  width: 85%;
  border-bottom: 1px solid black;
  margin-top: 15px;
  outline: none;
  display: flex;
  align-items: center;

  input {
    width: 80%;
    border: none;
    outline: none;
  }
`;

const Button2 = styled.button`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0067b8;
  margin-right: 60px;
  cursor: pointer;
  text-decoration: none;
  color: white;
  border: none;
`;
const Button = styled.div`
  width: 125px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b2b2b2;
  margin: 7px;
  cursor: pointer;
`;
const Buttonhold = styled.div`
  width: 100%;
  padding-right: 20px;
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Noacc = styled.div`
  font-size: 15px;
  margin-top: 15px;
  span {
    color: #0067b8;
  }
`;
const Signup = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
const Namein = styled.input`
  width: 85%;
  height: 40px;
  margin-top: 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
`;
const Sign = styled.h2`
  color: #1b1b1b;
  margin: 0;
  margin-top: 15px;
`;
const Name = styled.h2`
  color: #0067b8;
  margin-left: 5px;
  margin: 0;
`;
const Image = styled.img`
  height: 35px;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Card = styled.form`
  width: 450px;
  height: 420px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  padding-left: 40px;
  flex-direction: column;
  padding-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
`;
