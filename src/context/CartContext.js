import React, { createContext, memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [isOpen , setIsOpen] = useState(false);
  const [cart , setCart] = useState([])
  const [itemAmount , setItemAmount] = useState(0)
  const [amount , setAmount] = useState(0)
  const [total , setTotal] = useState(0)

  const location = useLocation()
  useEffect(()=>{
    const handleClose = ()=>{
      setIsOpen(false)
    }
    handleClose()
  },[location])


  useEffect(()=>{
    const amount = cart.reduce((acc , item)=>{
      return acc + item.amount
    },0)
    setItemAmount(amount)
    console.log(amount);


    const total = cart.reduce((acc , item)=>acc + (item.attributes.price * item.amount) , 0)

    setTotal(total)



  },[cart])



  const addToCart = (item , id) =>{
    setIsOpen(true)
    const itemID = parseInt(id)
    const newItem = {...item , amount: 1}
    setCart([...cart , newItem])

    const cartItem = cart.find(item=>item.id === itemID)

    if(cartItem){
      const newCart = cart.map(item=>{
        if(item.id === itemID){
          setAmount(cartItem.amount + 1)
          return {...item , amount: cartItem.amount + 1}
        }
        return item
      })
      setCart(newCart)
    }else{
      setCart([...cart , newItem])
    }
  }

  const removeFromCart = (id) => {
    console.log(`Item with ID ${id} removed`);
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
  };


  const clearCart = ()=>{
    setCart([])
  }

console.log(cart);

  return (
  <CartContext.Provider value={{isOpen, setIsOpen , addToCart , cart , removeFromCart , itemAmount , total , amount , clearCart}}>
    {children}
  </CartContext.Provider>
  )
};

export default memo(CartProvider);
