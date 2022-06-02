import React, { createContext,useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [status, setStatus] = useState(true);
  const handleUser=(d)=>{
   setUser(d.token);
   if(d.token){
    setStatus(false);
   }
  }
  const logout=()=>{
    setUser(null);
    setStatus(true);
  }
  return <AuthContext.Provider value={{logout,status,user,handleUser}}>{children}</AuthContext.Provider>;
};
