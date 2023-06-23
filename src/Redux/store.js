import { legacy_createStore as createStore} from "redux";
import {reducer} from "./reducer";

const initState = {

}

export const store = createStore(reducer,initState);