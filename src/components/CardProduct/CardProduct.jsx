import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardProduct = ({ product }) => {
    AOS.init();
    return (
        <Card data-aos="fade-up"
        data-aos-duration="1000" sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.titulo}
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                        {product.titulo}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        ${product.precio}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default CardProduct
