import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext'
import { useState, useContext } from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import "./CardProductDetail.css"

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const CardProductDetail = ({ product }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    
    const id = product.id
    const img = product.img
    const titulo = product.titulo
    const precio = product.precio

    const item = {
      id, titulo, precio, img
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
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 650,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 300, height: 350 }}>
            <Img alt="complex" src={product.img} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Titulo: {product.titulo}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Autor: {product.autor}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lugar y año de publicación: {product.lugar_publicacion}, {product.anio_publicacion}
              </Typography>
            </Grid>
           </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${product.precio}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <div>
        {
          quantityAdded > 0 ?
            (
              <Link to='/shop' >Terminar compra</Link>
            ) :
            (
              <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd} />
            )

        }
      </div>
    </Paper>
  );
}

export default CardProductDetail