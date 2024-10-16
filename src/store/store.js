import {applyMiddleware, createStore} from "redux";
import {brandReducer} from "../redux/reducers/brandReducer";
import {thunk} from "redux-thunk";

const store = createStore(brandReducer ,applyMiddleware(thunk));
export default store