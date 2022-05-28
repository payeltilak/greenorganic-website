import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Inventory from '../Inventory/Inventory';

const MyItem = () => {
    const [user]=useAuthState(auth)
    const [userItem,setUserItem]=useState([])

    useEffect(() => {
        const email=user?.email
        const url =`https://afternoon-headland-77959.herokuapp.com/myitems?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUserItem(data))
    },[user?.email,userItem])
    return (
        <div>
            <h3>Your Item</h3>
            <div>
                {
                    userItem.length===0?<h2>Please add something</h2>:userItem.map(item=><Inventory inventory={item}></Inventory>)
                }
            </div>
        </div>
    );
};

export default MyItem;