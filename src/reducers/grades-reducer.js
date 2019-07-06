import types from '../actions/types';

const DEFAULT_STATE = {
    average: 0,
    edit: null,
    list: []
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}
