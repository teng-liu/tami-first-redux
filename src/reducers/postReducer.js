import {FETCH_POSTS, NEW_POST, FETCH_DEFINES} from '../actions/types';

const initialState = {
    items: [],
    item: {},
    defines: []
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload 
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload 
            }
        case FETCH_DEFINES:
            return{
                ...state,
                defines: action.payload 
            }
            
        default: 
            return state;
    }
}