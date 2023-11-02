//carrito de compras
import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'


const CartWidget = () => {
    const { cart } = useContext(CartContext)

    const numberProducts = cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.quantity,
        0,
    );
    //console.log(numberProducts);

    //console.log('contexto', {cart})
    return (
        <div className="cart">
            {<ShoppingCartIcon />}
            <span>
                {numberProducts}
            </span>
        </div>
    );
}

export default CartWidget