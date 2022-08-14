import {createContext, useState} from "react";
export const ContextList = createContext();

export const ContextProvider = ({children}) => {
  const [selectedUser, setSelectedUser] = useState({
    email: "",
    firstname: "",
    surname: "",
    profilePic: "",
    registrationDate: "",
    city: "",
    streetName: "",
    location: {},
  });

  const values = {
    selectedUser,
    setSelectedUser,
  };
  return <ContextList.Provider value={values}>{children}</ContextList.Provider>;
};
