const initialState = {};

const stockData = (state = initialState, action) => {
  let newState = {
    test: 'test'
  };
  switch (action.type) {
    case 'SET_LAUNCH_DATA':
      newState = {launches: action.payload};
    break;
    default:
      newState = {};
  }
  return {...state, ...newState};
};

export default stockData;
