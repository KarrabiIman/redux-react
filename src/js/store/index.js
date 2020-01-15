import { createStore } from "redux";
import rootReducer from "../reducers/index";
console.log('store1');
const store = createStore(rootReducer);
console.log('store2');
export default store;
