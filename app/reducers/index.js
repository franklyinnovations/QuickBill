// @flow
import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import userReducer from "./userReducer";
import itemsReducer from "./itemsReducer";
import setCurrencyReducer from "./setCurrencyReducer";
import setPayDateReducer from "./setPayDateReducer";
import setAddInfoReducer from "./setAddInfoReducer";
import itemOrderReducer from "./itemOrderReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    items: itemsReducer,
    order: itemOrderReducer,
    currency: setCurrencyReducer,
    payDate: setPayDateReducer,
    addInfo: setAddInfoReducer
});

export default rootReducer;