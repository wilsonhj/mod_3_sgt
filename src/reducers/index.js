import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gradesReducer from './grades-reducer';

export default combineReducers({
    form: formReducer,
    grades: gradesReducer
});
