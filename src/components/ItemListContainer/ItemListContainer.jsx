import "./ItemListContainer.css"
import CardProduct from "../CardProduct/CardProduct";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Firestore
import { collection, query, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, "productos")
            );

            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            //console.log(docs)
            setProducts(docs);
        };
        getProducts();
    }, []);

    return (
        <div className="item-list-container" >
            {products.map((product) => {
                return (
                    <Link
                        to={`detail/${product.id}`}
                        key={product.id}
                        style={{ textDecoration: "none" }}
                    >
                        <CardProduct product={product} />                        
                    </Link>
                )
            })}
        </div>
    )
}
export default ItemListContainer