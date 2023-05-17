import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import myLogger from "./middleware/myLogger";

const store = createStore(rootReducer,applyMiddleware(logger,myLogger));

export default store;
