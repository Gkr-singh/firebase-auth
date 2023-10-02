import * as types from "./actionType";
import { auth, googleAuthProvider, facebookAuthProvider } from "../firebase";
import Swal from "sweetalert2";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => {
  const action = {
  type: types.REGISTER_SUCCESS,
  payload: user,
  }
  Swal.fire({
    icon: "success",
    title: "Register Successfully",
  });

  return action;
};


const registerFail = (error) => {
  const action = {
  type: types.REGISTER_FAIL,
  payload: error,
  }
  Swal.fire({
    icon: "error",
    title: error,
  });

  return action;
};

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => {
  
  const action = {
    type: types.LOGIN_SUCCESS,
    payload: user,
  };
  
  Swal.fire({
    icon: "success",
    title: "Login Successfull",
  });

  return action;
};

const loginFail = (error) => {
  const action = {
  type: types.LOGIN_FAIL,
  payload: error,
  };
  Swal.fire({
    icon: "error",
    title: error,
  });

  return action;

};

const logOutStart = () => ({
  type: types.LOGOUT_START,
});

const logOutSuccess = () => {
  const action = {
  type: types.LOGOUT_SUCCESS,
  }
  Swal.fire({
    icon: "success",
    title: "Logout Successfull",
  });

  return action;
};

const logOutFail = (error) => {
  const action ={
  type: types.LOGOUT_FAIL,
  payload: error,
  }
  Swal.fire({
    icon: "error",
    title: error,
  });

  return action;

};

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

const googleSignInStart = () => ({
  type: types.GOOGLE_SIGN_IN_START,
});

const googleSignInSuccess = (user) => {
  const action = {
  type: types.GOOGLE_SIGN_IN_SUCCESS,
  payload: user,
  }
  Swal.fire({
    icon: "success",
    title: "Login Successfull",
  });

  return action;
};

const googleSignInFail = (error) => {
  const action = {
  type: types.GOOGLE_SIGN_IN_FAIL,
  payload: error,
  }
  Swal.fire({
    icon: "error",
    title: error,
  });

  return action;
};

const fbSignInStart = () => ({
  type: types.FACEBOOK_SIGN_IN_START,
});

const fbSignInSuccess = (user) => {
  const action = {
  type: types.FACEBOOK_SIGN_IN_SUCCESS,
  payload: user,
  }
  Swal.fire({
    icon: "success",
    title: "Login Successfull",
  });

  return action;
};

const fbSignInFail = (error) => {
  const action = {
  type: types.FACEBOOK_SIGN_IN_FAIL,
  payload: error,
  }
  Swal.fire({
    icon: "error",
    title: error,
  });

  return action;
};

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginFail(error.message)));
  };
};

export const logOutInitiate = () => {
  return function (dispatch) {
    dispatch(logOutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logOutSuccess()))
      .catch((error) => dispatch(logOutFail(error.message)));
  };
};

export const googleSignInInitiate = () => {
  return function (dispatch) {
    dispatch(googleSignInStart());
    auth
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(googleSignInSuccess(user));
      })
      .catch((error) => dispatch(googleSignInFail(error.message)));
  };
};

export const fbSignInInitiate = () => {
  return function (dispatch) {
    dispatch(fbSignInStart());
    auth
      .signInWithPopup(facebookAuthProvider.addScope("user_birthday, email"))
      .then(({ user }) => {
        dispatch(fbSignInSuccess(user));
      })
      .catch((error) => dispatch(fbSignInFail(error.message)));
  };
};
