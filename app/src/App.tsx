import React, { useContext } from "react";
import AllRoutes from "./Components/AllRoutes/AllRoutes";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import DetailsComp from "./Components/DetailsComp/DetailsComp";
import { GlobalContext } from "./Components/context/mainContext";
import RegisterRoute from "./Components/AllRoutes/RegisterRoute";

const App = () => {
  const { toggleShow, showDetail, currentUser } = useContext(GlobalContext);

  return (
    <div>
      <RegisterRoute />
      {currentUser?.name ? <Header /> : null}
      <Container>
        <AllRoutes />
        {showDetail ? <DetailsComp /> : null}
      </Container>
    </div>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
