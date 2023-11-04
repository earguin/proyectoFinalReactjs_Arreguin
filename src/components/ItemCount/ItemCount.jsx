import { useState } from "react"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="ItemCount">
            <div className="Controls">
                <Button variant="outlined" onClick={decrement}><ArrowCircleDownIcon /></Button>
                <h5 className="Number">{quantity}</h5>
                <Button variant="outlined" onClick={increment}><ArrowCircleUpIcon /></Button>
            </div>
            <div className="btnAddCart">
                <Button  variant="contained" startIcon={<AddShoppingCartIcon />} onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemCount
