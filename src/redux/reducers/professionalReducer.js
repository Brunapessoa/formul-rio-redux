import { PROFESSIONAL_FORM } from '../actions';

const INITIAL_STATE = {
  curriculum: '',
  job: '',
  description: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PROFESSIONAL_FORM:
    return {
      ...state,
      [action.name]: action.value,
    };
  default:
    return state;
  }
};

export default professionalReducer;
