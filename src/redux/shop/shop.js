import SHOP_DATA from "./data";

const INITIALIZE_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIALIZE_STATE, action) => {
    switch(action.type){
        default:
            return state
    }
}

export default shopReducer;