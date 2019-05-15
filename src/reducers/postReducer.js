import {FETCH_POSTS, NEW_POST, FETCH_DEFINES} from '../actions/types';

const initialState = {
    items: [],
    item: {},
    defines: []
}

// state = initialState   =>   state, or initialState if state is null
export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_POSTS:
            // shallow copy - 1
            return {
                ...state,
                items: action.payload 
            }
            // shallow copy - 2
            // return Object.assign({}, old, {
            //     selected: action.parameters.id
            // })

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