import { useState } from "react"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
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
                <button className="Button" onClick={decrement}><ArrowCircleDownIcon /></button>
                <h5 className="Number">{quantity}</h5>
                <button className="Button" onClick={increment}><ArrowCircleUpIcon /></button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount
