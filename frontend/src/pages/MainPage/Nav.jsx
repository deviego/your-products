import React, { useContext } from "react";
import { Search } from "./Search";
import LogoutIcon from '@mui/icons-material/Logout';
import BookIcon from '@mui/icons-material/Book';
import { getProduct } from "../../services/api";
import { AuthContext } from "../../context/auth";


export function Nav () {

  const {logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }; 



  
    
    return(
        <div className="nav">
        <div className="logo">
          <BookIcon className="Book-icon" />
          <h1> RepoSystem</h1>
        </div>

        <Search />
        <button className="button-logout" onClick={handleLogout}>
          <LogoutIcon className="logout-icon"></LogoutIcon>
        </button>
      </div>
    )
}