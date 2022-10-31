import React, { useContext } from "react";
import {  Navigate, Route, Routes } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/auth";
import { LoginPage } from "./pages/LoginPage"

import { MainPage } from "./pages/MainPage"
 

export  function AppRoutes() {
  const Private = ({children}) => {
    const {authenticated, loading} = useContext(AuthContext)
    if(loading){
      return <div className="loading">Carregando...</div>
    }
    if(!authenticated){
      return <Navigate  to="/login" />
    }
    
    return children
  }
  return (
    <AuthProvider>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/" element={<Private><MainPage /></Private>} />
        </Routes>
        </AuthProvider>
  );
}
