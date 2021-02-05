import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';


const Usuarios = () => {
    
    const dispatch = useDispatch();

    const name = useSelector((state: any) => state.usuarios.name)
    const username = useSelector((state: any) => state.usuarios.username)
    const email = useSelector((state: any) => state.usuarios.email)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(resposta => dispatch({ type: 'GET_USUARIOS', payload: resposta.data}))
    }, [])

    return (
        <div className="App">
            <h2>Usuario: </h2>
                <h3>{name}</h3>
                <p>Username: <b>{username}</b></p>
                <p>Email: <b>{email}</b></p>
        </div>
    )
}

export default Usuarios;
