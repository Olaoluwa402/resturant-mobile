import { combineReducers } from "redux";
import { restaurantReducer, restaurantDetailReducer } from "./resturantReducer";

const reducers = combineReducers({
    restaurantData:restaurantReducer,
    restaurantDetail:restaurantDetailReducer
})

const rootReducer = (state,action) => {
    return reducers(state, action)
}


export default rootReducer;