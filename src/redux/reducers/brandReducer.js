import {GET_FETCH_BRAND} from "../actions/actions";

const initialState = {
    products:[]
}

export const brandReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_FETCH_BRAND:
            return{
                ...state,
                products:action.payload
            }
        default:
            return state
    }
}