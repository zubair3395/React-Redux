import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { AddCart } from '../Redux/ActionItem';

function ShoppingCart(props) {
    const[ users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    useEffect(()=>{
        fetch("https://api.github.com/users").then((response)=> response.json())
        .then((data)=> setUsers(data));
    }, []);
  return (
    <>
    <Navbar count={count}/>
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
                <button className="btn btn-primary" onClick={()=> {props.addCart(element)
                setCount(count+1)}}>Add to Cart</button>
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
const stateMapToProps = (state)=>{
   return{data: state.cartItem}
}
const stateDispatchProps = (dispatch)=>{
   return{
    addCart: (data)=> dispatch(AddCart(data))
   }
}
export default connect(stateMapToProps, stateDispatchProps)(ShoppingCart)
