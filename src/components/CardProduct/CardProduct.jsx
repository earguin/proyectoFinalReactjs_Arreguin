import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext'
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const CardProduct = ({ product }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const id = product.id
        const titulo = product.titulo
        const precio = product.precio

        const item = {
            id, titulo, precio
        }

        addItem(item, quantity)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.titulo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        ${product.precio}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Stock {product.stock}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    quantityAdded > 0 ? 
                    (
                        <Link to='/shop' >Terminar compra</Link>
                    ) : 
                    ( 

                        <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
                    )
                    
                }
            </CardActions>
        </Card>
    );
}

export default CardProduct
