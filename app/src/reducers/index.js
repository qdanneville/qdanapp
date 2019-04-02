import {init} from './pureFunction'

function appReducer(state = {}, action) {
    switch (action.type) {
        case 'INIT':
            return init(state, action.label);
        default: 
            return state
    }
}


export default appReducer