import { PERSONAL_FORM } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  uf: '',
};

const personalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_FORM:
    return {
      ...state,
      [action.name]: action.value,
    };
  default:
    return state;
  }
};

export default personalReducer;
