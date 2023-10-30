const gerStoredCart = () =>{
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
    const cart = gerStoredCart();
    cart.push(id); 

    saveCartToLs(cart)
}

export {addToLs}