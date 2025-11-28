import { LOGIN_ACTION, LOGOUT_ACTION, VIEW_PRODUCT } from "./actionTypes";

export const viewProduct = (payload) => {
  console.log(payload, "payload");
  return {
    type: VIEW_PRODUCT,
    payload,
  };
};

export const loginAction = () => {
  return {
    type: LOGIN_ACTION,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT_ACTION,
  };
};
