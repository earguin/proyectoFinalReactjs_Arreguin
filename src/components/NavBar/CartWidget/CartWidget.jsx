//carrito de compras
import "./CartWidget.css"
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { CartContext } from '../../../context/CartContext'
import { useContext } from 'react'


const CartWidget = () => {
    const { getTotalProducts } = useContext(CartContext)

    let numberProducts = getTotalProducts()
    
    return (
        <div className="cart">
            {<LocalMallOutlinedIcon />}
            <span>
                {numberProducts}
            </span>
        </div>
    );
}

export default CartWidget