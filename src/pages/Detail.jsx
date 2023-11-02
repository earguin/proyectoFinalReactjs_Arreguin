import CardProduct from "../components/CardProduct/CardProduct";
import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import { collection, query, getDocs , where, documentId} from "firebase/firestore";
import { db } from '../firebase/firebaseConfig'

const Detail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState([]);
    // console.log(id)
    useEffect(() => {
        const getProducts = async () => {
            const q = query(
                collection(db, "productos"), where(documentId(), "==", id)
            );

            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
           // console.log(docs)
            setProduct(docs);
        };
        getProducts();
    }, [id]);


    // useEffect(() => {
    //     fetch(`https://dummyjson.com/products/${id}`)
    //         .then((response) => response.json())
    //         .then((json) => setProduct(json));
    // }, [id]);

    return (
        <div className="Detail">
            {
                product.map((product) => 
                {
                    return <CardProduct product={product} key={product.id} />;
                })
            }
        </div>
    );
};

export default Detail;
