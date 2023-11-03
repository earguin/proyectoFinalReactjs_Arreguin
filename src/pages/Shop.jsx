import { Button, IconButton } from "@mui/material";
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Shop = () => {
    const { cart, clearCart, removeItem, getTotalPay} = useContext(CartContext)
    //console.log({ cart, getTotalPay })

    let totalPagar = getTotalPay()

    return (
        <div>
            <h1> Carrito de compras</h1>
            <h2>Total a pagar: ${totalPagar}.00</h2>
            {
                cart.map(product => {
                    return (
                        <div key={product.id}>
                            <div>Producto: {product.titulo}</div>
                            <div>Cantidad: {product.quantity}</div>
                            <div>Precio por unidad: ${product.precio}</div>
                            <IconButton onClick={() => removeItem(product.id)}>
                            <DeleteOutlineIcon />
                            </IconButton>
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

