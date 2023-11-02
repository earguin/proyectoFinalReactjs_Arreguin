import { useState } from "react";
import {Button, TextField} from "@mui/material";
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import Message from '../components/Message/Message'
import { useContext } from 'react'
import { CartContext } from "../context/CartContext";

import * as Yup from 'yup'

const styles = {
    containerShop: {
        textAlign: "center",
        paddingTop: 20,
    },
};

const initialState = {
    name: "",
    apellido: "",
    email: "",
};

const Checkout = () => {
    const { clearCart } = useContext(CartContext)
    const [values, setValues] = useState(initialState);
    const [purchaseID, setPurchaseID] = useState("");

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "compras"), {
            values,
        });
        setValues(initialState);
        setPurchaseID(docRef.id);
        clearCart();
        //console.log(docRef.id);
    };

    return (
        <div style={styles.containerShop}>
            <h1 style={{ color: "black" }}>Checkout</h1>
            <form className="FormContainer" onSubmit={handleOnSubmit} >
                <TextField
                    variant='outlined'
                    label="Nombre"
                    name="name"
                    value={values.name}
                    onChange={handleOnChange}
                    required
                />
                <TextField
                    variant='outlined'
                    label="Apellido"
                    name="apellido"
                    value={values.apellido}
                    onChange={handleOnChange}
                    required
                />
                <TextField
                    variant='outlined'
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleOnChange}
                    required
                />
                
                <Button variant='contained' className="btnASendAction" type="submit">Comprar</Button>
            </form>
            {purchaseID && <Message purchaseID={purchaseID} />}            
        </div>
    );
};

export default Checkout;
