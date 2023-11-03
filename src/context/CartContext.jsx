import {createContext, useState} from 'react'

export const CartContext = createContext ({
    cart: []
}) 

export const CartProvider = ({children } ) => {
    const [cart, setCart] = useState([])
    //console.log(cart)
    const addItem = (item, quantity) => {
        // if(!isInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity}])       
            // console.log(item)
            // console.log(cart)          
        // } else {
        //     console.error('El producto ya fue agregado')
        // }
    }

    const removeItem = (id) => {
        const cartUpdate = cart.filter(prod => prod.id !== id)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalPay = () => { 
        let total = cart.reduce( (accumulator, currentValue) => {
            return accumulator + (currentValue.precio * currentValue.quantity)
        }, 0 )
        return total
    }

    const getTotalProducts = () => {
        let totalProducts = cart.reduce( (accumulator, currentValue) => {
            return accumulator + currentValue.quantity
        }, 0 )
        return totalProducts
    }

    // const isInCart = (itemId) => {
    //     return cart.some(prod => prod.id === itemId)
    // }
    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, getTotalPay, getTotalProducts}}>
            {children}           
        </CartContext.Provider>
    )
}