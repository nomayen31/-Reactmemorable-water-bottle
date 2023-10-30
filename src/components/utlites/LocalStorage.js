const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLs = cart =>{
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringfied);
}



const addToLs = id =>{
    const cart = getStoredCart();
    cart.push(id); 

    saveCartToLs(cart)
}


const removeFromLs = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id)
    saveCartToLs(remaining)

}
export {addToLs, getStoredCart, removeFromLs}


// ============ 5-19 ==============