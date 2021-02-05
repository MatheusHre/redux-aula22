import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

const Todos = () => {

    const dispatch = useDispatch();

    const arrayTodo = useSelector((state: any) => state.todos.arrayTodos)
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(resposta => dispatch({ type: "GET_TODOS", payload: resposta.data}))
    }, [])


    return (
        <div className="App">
            <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
            <h2>Lista ToDo: </h2>
            {
             arrayTodo !== null &&
             arrayTodo.map((resposta: any) => (
            <ul>
                <li key={resposta.id}>
                    <p><b>{resposta.title} ({resposta.id})</b></p>
                </li>
            </ul>
            ))}
        </div>
    );
}

export default Todos;