import mockData from '../mock.json';
import * as actionTypes from '../actionTypes'; 

/** Action Dispatcher  */
const fetchmockData = () => (
  async(dispatch) => {
    dispatch({ type: actionTypes.FETCH_MOCK_DATA, data: mockData })
  }
)

export { fetchmockData };
