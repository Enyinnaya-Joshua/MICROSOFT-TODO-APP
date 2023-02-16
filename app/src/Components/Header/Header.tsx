import React, { useState, useContext } from "react";
import styled from "styled-components";
import { BsFillGrid3X3GapFill, BsMegaphone } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineQuestion } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { GlobalContext } from "../context/mainContext";
import Side from "../sidebar/sidebar";

const Header = () => {
  const [show, setShow] = useState(false);
  const { currentUser } = useContext(GlobalContext);

  const Toggle = () => {
    setShow(true);
  };
  return (
    <Container>
      <Wrapper>
        <Todohold>
          <Grid>
            <BsFillGrid3X3GapFill />
          </Grid>
          {/* <Icon onClick={Toggle}><FiMenu /></Icon> */}
          <Text>To Do</Text>
        </Todohold>
        <Inputhold>
          <Search>
            <AiOutlineSearch />
          </Search>
          <Input type="search" />
        </Inputhold>
        <Settingshold>
          <Settings>
            <CiSettings />
          </Settings>
          <Question>
            <AiOutlineQuestion />
          </Question>
          <Mega>
            <BsMegaphone />
          </Mega>
          <Circle style={{ letterSpacing: 1 }}>
            {currentUser.name?.substring(0, 2).toUpperCase()}
          </Circle>
        </Settingshold>
      </Wrapper>
      <Side />
    </Container>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  height: 55px;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: #2564cf;
  justify-content: space-between;
`;

const Icon = styled.div`
  display: flex;
  color: black;
  margin-left: 35px;
  font-size: 20px;
`;
const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 13px;
  text-align: center;
  font-size: 14px;
`;
const Mega = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
`;
const Question = styled.div`
  color: white;
  font-size: 20px;
  display: flex;
`;
const Settings = styled.div`
  display: flex;
  color: white;
  font-size: 20px;
`;
const Settingshold = styled.div`
  display: flex;
  align-items: center;
  width: 170px;
  justify-content: space-between;
`;
const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  height: 100%;
`;
const Search = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
  color: #2564cf;
`;
const Inputhold = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  background-color: white;
  width: 470px;
  border-radius: 5px;
  overflow: hidden;
`;
const Text = styled.div`
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-left: 30px;
`;
const Grid = styled.div`
  color: white;
  /* font-weight: bold; */
  font-size: 20px;
  margin-left: 20px;
  margin-top: 5px;
`;
const Todohold = styled.div`
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  position: relative;
`;
