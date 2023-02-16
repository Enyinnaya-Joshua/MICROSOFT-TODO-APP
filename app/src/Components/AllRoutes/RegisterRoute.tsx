import React from "react";
import { useRoutes } from "react-router-dom";
import Signup from "../AuthPage/SignUp";
import Signin from "../AuthPage/SignIn";

const RegisterRoute = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Signin />,
    },
    {
      path: "/register",
      element: <Signup />,
    },
  ]);
  return <div>{element}</div>;
};

export default RegisterRoute;
