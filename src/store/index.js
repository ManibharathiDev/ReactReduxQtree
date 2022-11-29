import { createStore } from "redux";
import roodReducers from "../reducers";
const store = createStore(roodReducers);
export default store;