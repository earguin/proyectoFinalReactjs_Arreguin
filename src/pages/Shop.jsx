import { Button, IconButton } from "@mui/material";
import { useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Shop.css'

const Shop = () => {
    const { cart, clearCart, removeItem, getTotalPay } = useContext(CartContext)
    console.log({ cart })

    let totalPagar = getTotalPay()

    return (
        <div>
            <h1> Carrito de compras</h1>
            <div className="Shop">
            {
                cart.map((product) => (
                    <div className="itemShop" key={product.id}>
                        <div ><img src={product.img} style={{ width: 100, height: 150 }} /></div>
                        <div style={{width:400}}>{product.titulo}</div>
                        <div>Precio por unidad: ${product.precio}</div>
                        <div>Cantidad: {product.quantity}</div>
                        <div className="botonera">
                            <IconButton onClick={() => removeItem(product.id)}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        </div>
                    </div>
                )
                )
            }
            </div>
            {
                cart.length > 0 ?
                    (<div className="contTotalPagar">
                        <h2>Total a pagar: ${totalPagar}.00</h2>
                        <Link to="/Checkout">
                            <Button variant="contained">Finalizar compra</Button>
                        </Link>
                        <Button variant="outlined" onClick={clearCart}>Vaciar el carrito</Button>
                    </div>
                    ) : (<p>No hay productos en el carrito</p>)
            }

        </div>
    )
}

export default Shop

