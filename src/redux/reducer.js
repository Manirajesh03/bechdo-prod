import { LOGIN_ACTION, LOGOUT_ACTION, VIEW_PRODUCT } from "./actionTypes";

const initialState = {
  auth: {
    isAuthenticated: false,
  },
  viewProduct: [],
};

const reducer = (state = initialState, action) => {
  console.log(state?.auth?.isAuthenticated);
  switch (action.type) {
    case VIEW_PRODUCT:
      return { ...state, viewProduct: [action.payload] };
    case LOGIN_ACTION:
      return {
        ...state,
        auth: { isAuthenticated: true },
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        auth: { isAuthenticated: false },
        viewProduct: [],
      };
    default:
      return state;
  }
};

export default reducer;
