import {
 GET_RESTAURANTS_REQUEST,
 GET_RESTAURANTS_SUCCESS,
 GET_RESTAURANTS_FAIL,
 GET_RESTAURANTS_RESET,
 GET_RESTAURANTDETAIL_REQUEST,
 GET_RESTAURANTDETAIL_SUCCESS,
 GET_RESTAURANTDETAIL_FAIL,
 GET_RESTAURANTDETAIL_RESET,
 CLEAR_ERRORS
} from '../contants/resturantConstant.js'


const restaurantReducer = (state={restaurants:[]}, action) =>{
    switch(action.type){
         case GET_RESTAURANTS_REQUEST :
            return {loading:true}
        case GET_RESTAURANTS_SUCCESS :
            return {loading:false, success:true, restaurants:action.payload}
        case GET_RESTAURANTS_FAIL:
            return {loading:false, error:action.payload}
        case GET_RESTAURANTS_RESET:
            return {}
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }
        default :
        return state;
    }
}

const restaurantDetailReducer = (state={}, action) =>{
    switch(action.type){
         case GET_RESTAURANTDETAIL_REQUEST :
            return {loading:true}
        case GET_RESTAURANTDETAIL_SUCCESS :
            return {loading:false, success:true, restaurant:action.payload}
        case GET_RESTAURANTDETAIL_FAIL:
            return {loading:false, error:action.payload}
        case GET_RESTAURANTDETAIL_RESET:
            return {}
        default :
        return state;
    }
}

export {restaurantReducer, restaurantDetailReducer}