import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';



const AddItems = () => {
    const [user]=useAuthState(auth)
    
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => 
    {
        console.log(data);
        const url =`http://localhost:5000/inventories`
         fetch(url,{
             method:'POST',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(result=>{
             console.log(result);
             reset()
         })
    }
    return (
        <div className='w-75 mx-auto'>
            <h2>Add  product</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
             <input className='mb-2' value={user.email} placeholder='email' type="text" {...register("email")} />
             <input className='mb-2' value={user.displayName} placeholder='Name' {...register("user.displayName", { required: true, maxLength: 20 })} />

             <input className='mb-2' placeholder='Photo URl' type="text" {...register("img")} />
             <input className='mb-2' placeholder='price' type="number" {...register("price")} />
             <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
             <input className='mb-2' placeholder='Supplier' {...register("Supplier")} />
             <input className='mb-2' placeholder='Description' {...register("Description")} />
             <input className='mb-2' type="Submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItems;