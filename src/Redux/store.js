import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from "redux";
import rootReducer from "./Reducers";

export default createStore(rootReducer, composeWithDevTools( ));

// export default createStore(rootReducer);
