import { Button } from "@mui/material";
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";

const Shop = () => {
    const { cart, clearCart } = useContext(CartContext)
    console.log({ cart })

    const totalPay = cart.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.precio * currentValue.quantity),
        0,
    );

    return (
        <div>
            <h1> Carrito de compras</h1>
            <h2>Total a pagar: ${totalPay}.00</h2>

            {
                cart.map(product => {
                    return (
                        <div key={product.id}>
                            <div>Producto: {product.titulo}</div>
                            <div>Cantidad: {product.quantity}</div>
                            <div>Precio por unidad: ${product.precio}</div>
                        </div>

                    )
                })
            }

            <Link to="/Checkout">
                <Button variant="contained">Finalizar compra</Button>
            </Link>
            <Button variant="contained" onClick={clearCart}>Vaciar el carrito</Button>            
        </div>
    )
}

export default Shop

