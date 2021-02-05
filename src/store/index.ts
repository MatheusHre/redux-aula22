import { createStore } from 'redux'
import { combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"


const initialStateTodos ={
    arrayTodos: []
}

function reducerTodos(state = initialStateTodos, action: any) {
    switch(action.type) {
        case 'GET_TODOS':
            return {
                ...state,
                arrayTodos: action.payload,
            }
            default:
                return state
    }
}

const initialStateUsuarios = {
    name: "",
    username: "",
    email: ""
}

function reducerUsuarios(state = initialStateUsuarios, action: any) {
    switch(action.type) {
        case 'GET_USUARIOS':
            return {
                name: action.payload.name,
                username: action.payload.username,
                email: action.payload.email
            }
            default:
                return state
    }
}

const createRootReducer = () => combineReducers({
    todos: reducerTodos,
    usuarios: reducerUsuarios
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }