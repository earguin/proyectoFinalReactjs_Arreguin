import CardProduct from "../components/CardProduct/CardProduct";
import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { collection, query, getDocs , where} from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'


const Category = () => {    
    const [products, setProducts] = useState([]);
    let { categoria } = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, "productos"), where("categoria", "==", categoria)
            );

            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
           // console.log(docs)
            setProducts(docs);
        };
        getProducts();
    }, [categoria]);

    return (
        <div className="item-list-container">
            {
                products.map( (product) => {                    
                    return (
                        <Link to={`../../detail/${product.id}`} key={product.id} style={{ textDecoration: "none" }} >
                        <div style={{ margin: 10 }} key={product.id}>
                            <CardProduct product={product} key={product.id} />
                        </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Category;

