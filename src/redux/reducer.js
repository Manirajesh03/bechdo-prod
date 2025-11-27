import { LOGIN_ACTION, VIEW_PRODUCT } from "./actionTypes";

const initialState = {
  auth: {
    isAuthenticated: false,
  },
  viewProduct: [],
};

const reducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case VIEW_PRODUCT:
      return { ...initialState, viewProduct: [action.payload] };
    case LOGIN_ACTION:
      return {
        ...initialState,
        auth: { isAuthenticated: !state?.auth?.isAuthenticated },
      };
    default:
      return state;
  }
};

export default reducer;
