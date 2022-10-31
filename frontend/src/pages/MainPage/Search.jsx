import React, { useContext, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { AuthContext } from "../../context/auth";
import { getProduct } from "../../services/api";

export function Search() {
const [query, setQuery] = useState("")
const {user} = useContext(AuthContext)
const handleSearch = async (query) =>{
  const response = await getProduct(user?.id, query)
  console.log(query)

} 

const handleClear = () => {
    setQuery('');
}
return(
     <div className="search">
    <input placeholder="Procurar produto" type="text" name="query" id="query" value={query} onChange={(e) => setQuery(e.target.value)}/>
    
    <button onClick={() => handleSearch(query)} className="search-button"> 
      <SearchIcon className="search-icon" />
     </button>
    <button onClick={handleClear} className="clear-button" ><DeleteIcon /></button> 
  </div>
)

   

}

