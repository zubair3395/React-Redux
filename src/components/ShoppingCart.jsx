import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';
import { addCart } from '../Redux/ActionItem';
import { useSelector, useDispatch } from 'react-redux';
function ShoppingCart() {
    const[ users, setUsers] = useState([]);
    const data= useSelector(state => state.cartItem);
    const dispatch= useDispatch();
    useEffect(()=>{
        fetch("https://api.github.com/users").then((response)=> response.json())
        .then((data)=> setUsers(data));
    }, []);
  return (
    <>
    <Navbar count={data.length}/>
    <div className='container'>
      <h1 className='my-5'> Shopping Cart Items</h1>
      
        <div className="row">
          {  users.map((element, index)=>
          <div className="col-md-4 my-3" key={index}>
              <div className="card" style={{width: "18rem"}}>
              <img src={element.avatar_url} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{element.login}</h5>
                <p className="card-text">{element.subscriptions_url}</p>
                <button className="btn btn-primary" onClick={()=> dispatch(addCart(element))}>Add to Cart</button>
              </div>
            </div>
            </div>
          )
          }
        </div>
    </div>
    </>
  )
}

export default ShoppingCart;
