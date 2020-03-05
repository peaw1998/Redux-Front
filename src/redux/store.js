import { createStore, combineReducers } from "redux";

const initial = {
    name: '',
    weight: 0,
    img: ''
}

const bearReducer = (bears = [], action) => {

    switch (action.type) {
        case 'GET_BEARS':
            return action.bears
        case 'ADD_BEARS':
            return [...bears, action.bear]
        case 'DELETE_BEARS':
            return bears.filter(bear => +bear.id !== +action.id)
        case 'UPDATE_BEARS':
            return bears.map(bear => {
                if (+bear.id === +action.id)
                    return action.bear
                else
                    return bear
            })
    }

    return bears
}

const formReducer = (data = initial, action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...data, name: action.name }
        case 'CHANGE_WEIGHT':
            return { ...data, name: action.weight }
        case 'CHANGE_IMG':
            return { ...data, name: action.img }
    }

    return data
}

const rootReducer = combineReducers({
    bears: bearReducer,
    form: formReducer
})

export const store = createStore(rootReducer)