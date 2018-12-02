
import * as actionTypes from '../../actions/actionTypes';

const initialState = { 
  mockList: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  
  case actionTypes.FETCH_MOCK_DATA:
    return {
      ...state,
      mockList: action.data
    }

  default: break;
  }
  return state;
};

export default reducer;


