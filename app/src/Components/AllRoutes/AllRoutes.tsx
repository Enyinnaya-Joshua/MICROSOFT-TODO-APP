import React from "react";
import { useRoutes } from "react-router-dom";
import Assigned from "../Assigned/Assigned";
import Important from "../Important/importtant";
import MyDay from "../MyDay/myDay";
import Planned from "../Planned/Planned";
import Tasks from "../Task/tasks";

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/myday",
      element: <MyDay />,
    },
    {
      path: "/tasks",
      element: <Tasks />,
    },

    {
      path: "/planned",
      element: <Planned />,
    },
    {
      path: "/important",
      element: <Important />,
    },
    {
      path: "/assigned",
      element: <Assigned />,
    },
  ]);
  return element;
};

export default AllRoutes;
