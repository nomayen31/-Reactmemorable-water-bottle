import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from "../utlites/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles , setBottles] = useState([]);

  

    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        if ( bottles.length > 0) {
            const storedCart = getStoredCart();
        console.log(storedCart);
        const savedCart = []
        for(const id of storedCart){
            console.log(id);
            const bottle = bottles.find( bottle => bottle.id === id)
            if (bottle) {
                savedCart.push(bottle)
            }
        }
        console.log('saved cart', savedCart);
        setCart(savedCart)
        }
        
    },[bottles])

    const handleAddToCart = (bottle) =>{
        const newCart = [...cart, bottle ];
        setCart(newCart)
        addToLs(bottle.id)
    }

    const handleRemoveFromCart = id =>{
        const remaningCart = cart.filter(bottle => bottle.id !== id)
        setCart(remaningCart)
             removeFromLs(id)
    }
    return (
        <div>
            <h2>Bottles Available {bottles.length}</h2>
            
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
          <div className="bottle-container">
          {
                bottles.map(bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                
                handleAddToCart={handleAddToCart}
                ></Bottle>)
            }
          </div>
        </div>
    );
};

export default Bottles;