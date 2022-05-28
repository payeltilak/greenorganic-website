import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateItem = () => {
    const {id}=useParams()
    const [item, setItem] = useState()
    const quantityRef=useRef('')
    
    useEffect(() => {
        const url = `https://afternoon-headland-77959.herokuapp.com/inventories/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItem(data))
    }, [id,item])
    
    const handleDelivered = (id) => {
        const itemQuantity=item.quantity
        const updateQuantity = itemQuantity - 1
        const quantity={...item ,quantity:updateQuantity}
        const url =`https://afternoon-headland-77959.herokuapp.com/update-inventories/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(quantity)
        })
        .then(res=>res.json())
            .then(data => {
            toast.success("Product delivered")
        })
    }
    const addQuantity = (e) => {
        e.preventDefault()
        const newQuantity=parseInt(quantityRef.current.value)
        const itemQuantity = item.quantity
        const updateQuantity=newQuantity+itemQuantity
        const quantity = { ...item, quantity: updateQuantity }
        const url =`https://afternoon-headland-77959.herokuapp.com/update-inventories/${item._id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type':"application/json"
            },
            body:JSON.stringify(quantity)
        })
        .then(res=>res.json())
            .then(data => {
            toast.success("Added Quantity")
            e.target.reset()
        })

    }
    return (
        <div>
            <img src={item?.img} alt="" />
            <p>Quantity: {item?.quantity}</p>
            <button onClick={()=>handleDelivered(item?._id)} className='btn btn-success'>Delivered</button>
            <form onSubmit={addQuantity}>
                <input type="number" ref={quantityRef}/>
                <input type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateItem;