const initialState = {code: ""}

const indexReducer = (oldState = initialState, action) => {
  // console.log(oldState)
  // console.log(action)
  switch (action.type) {
    case 'ADD_DISCOUNT_CODE': // initializing page with 50 Product
      return {code: action.code};
    default:
      return oldState;
    }
  }

export default indexReducer;
