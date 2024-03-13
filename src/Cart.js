import {useState}from 'react'

const Cart = () => {
    const [cartcount, setCartCount] = useState(0)
    function handleClick(){
        setCartCount(cartcount + 1)
    } 
   return (
    <>
    <h1>Number of items in the Cart {cartcount}</h1>
    <button onClick={handleClick}> Add to cart</button>
    </>
  )
}

export default Cart
