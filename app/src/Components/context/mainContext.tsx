import React, { createContext, PropsWithChildren, useState } from "react";

interface User {
  email: string;
  name: string;
  _id: string;
}

interface contextData {
  showDetail: boolean;
  toggleShow: () => void;
  currentUser: User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User>>;
}

export const GlobalContext = createContext<contextData>({
  showDetail: false,
  toggleShow: () => {},
  currentUser: {
    name: "",
    email: "",
    _id: "",
  },
  setCurrentUser: (currentUser: {}) => {},
});

const MainContext: React.FC<PropsWithChildren> = ({ children }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>({} as User);
  const toggleShow = () => {
    setShowDetail(!showDetail);
  };

  React.useEffect(() => {
    if (window.localStorage.getItem("userData")) {
      const mydata = JSON.parse(window.localStorage.getItem("userData") || "");
      setCurrentUser(mydata);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        showDetail,
        toggleShow,
        setCurrentUser,
        currentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { MainContext };
