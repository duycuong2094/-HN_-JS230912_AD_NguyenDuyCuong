import React, { useState, useEffect } from 'react';
import Cart from './Cart';

function ListProduct(props) {
  const [product, setProduct] = useState([]);
  const[myMoney,setMyMoney]=useState(100000000000)
  const [cart,setCart]=useState([])
  function formatCurrency(amount) {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }
  useEffect(() => {
    setProduct(props.listProduct);
  }, [props.listProduct]);
const handleInrest=(index)=>{
 if(product[index].quatity>0){
    let newInterest = [...product]
    newInterest[index].quatity-=1;
    setProduct(newInterest)
    let   newMonney=myMoney+product[index].price;
    setMyMoney(newMonney);
    let productInCart = cart.find((item) => item.name === product[index].name);

    if (productInCart) {
      productInCart.quantity -= 1;
      setCart([...cart]);
      let update =cart.filter((item)=>item.quatity!=0);
      setCart(update)

    } 
 }

}
const handleAdd=(index)=>{
    let newAdd=[...product];
    newAdd[index].quatity+=1
    setProduct(newAdd);
    let newMoneyAdd=myMoney-product[index].price;
    setMyMoney(newMoneyAdd);
    let productInCart = cart.find((item) => item.name === product[index].name);

    if (productInCart) {
      productInCart.quantity += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, product[index]]);
    }
}
  return (
    <>
      <h1>Số tiền của bạn là {formatCurrency(myMoney)}</h1>
      <div className='listProduct'>
        {product.map((item, index) => (
          <div className='product' key={index}>
            <div className='img'><img src={item.img} alt="" /></div>
            <div className='nameProduct'>
              <span>{item.name}</span> <span>{formatCurrency(item.price)}</span>
            </div>
            <div className='addProduct'>
              <button onClick={()=>handleInrest(index)}>Interest</button>
              <span>{item.quatity}</span>
              <button onClick={()=>handleAdd(index)}>Add</button>
            </div>
          </div>
        ))}
      </div>
      <Cart cart={cart}/>
      
    </>
  );
}

export default ListProduct;
