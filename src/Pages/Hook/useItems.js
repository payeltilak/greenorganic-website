import { useEffect, useState } from "react";

const useItems=()=>{
  
    const [inventories,setInventories]=useState([]);
    useEffect(()=>{
        fetch('https://afternoon-headland-77959.herokuapp.com/inventories')
        .then(res=>res.json())
        .then(data=>setInventories(data))
    },[]);
    return[inventories,setInventories]
}
export default useItems;