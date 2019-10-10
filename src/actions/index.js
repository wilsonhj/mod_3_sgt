import types from './types';
import axios from 'axios';

export const addGradeData = (gradeData) => async dispatch => {
  const resp = await axios.post('/api/grades', gradeData);

  dispatch({
    type: types.ADD_GRADE_DATA,
    data: resp.data
  });

}

export const getGradeData = () => async dispatch => {
  const resp = await axios.get('/api/grades');
  
  dispatch({
    type: types.GET_GRADE_DATA,
    grades: resp.data
  })
}

// export function getGradeData(){
//   return async function (dispatch){
//     
//   }
// }