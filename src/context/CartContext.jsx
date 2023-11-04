import { createContext, useState } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    //console.log(cart)
    const addItem = (item, quantity) => {
            setCart(prev => [...prev, { ...item, quantity }])
    }


    const removeItem = (id) => {
        const cartUpdate = cart.filter(prod => prod.id !== id)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalPay = () => {
        let total = cart.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.precio * currentValue.quantity)
        }, 0)
        return total
    }

    const getTotalProducts = () => {
        let totalProducts = cart.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity
        }, 0)
        return totalProducts
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalPay, getTotalProducts }}>
            {children}
        </CartContext.Provider>
    )
}