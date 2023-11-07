import React, { useEffect, useState } from 'react';

function Cart(props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let a = 0;
    for (let i = 0; i < props.cart.length; i++) {
      a += props.cart[i].price * props.cart[i].quatity;
    }
    setTotal(a);
  }, [props.cart]);

  console.log(props.cart);

  return (
    <div>
      <h1>Cart</h1>
      {props.cart.map((item, index) => (
        <div key={index} className='cartProduct'>
          <span>{item.name}</span> <span>{item.quatity}</span>
        </div>
      ))}
      <h1>Total: {total}</h1>
    </div>
  );
}

export default Cart;
