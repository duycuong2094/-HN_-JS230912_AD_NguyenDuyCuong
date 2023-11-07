import React, { useEffect, useState } from 'react';

function Cart(props) {
  const [total, setTotal] = useState(0);
  function formatCurrency(amount) {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
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
      <h2>Total: {formatCurrency(total)}</h2>
    </div>
  );
}

export default Cart;
