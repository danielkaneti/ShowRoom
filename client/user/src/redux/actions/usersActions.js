import axios from 'axios';
import {
  usersURL,
  usersByParamsURL,
  updateReviewByUserIdURL,
  usersCountURL,
  userByUserNameURL,
  userByUserIdURL,
  userByEmailURL,
} from '../../api/users';

//Action creator - async using thunk

export const signIn = (email, password, history) => async (dispatch) => {
  const data={
    email: email,
    password: password
  };

  try {
    const user = await axios.post('http://localhost:2222/users/login',data);

    dispatch({
      type: "SIGN_IN",
      payload: {
        isLogged: true,
        user: user.data[0],
      },
    });

    history.push('/');
  } catch (error) {
    dispatch({
      type: "ERROR_SIGN_IN",
    });
    
    alert(error.response.data);
  }
};

export const signUp = (firstName, lastName, username, email, password, history) => async (dispatch) => {
  try {
    const response = await axios.post(
      usersURL(),
      {
        firstName,
        lastName,
        username,
        email,
        password,
      }
    );
    dispatch({
      type: "SIGN_IN",
      payload: {
        isLogged: true,
        user: response.data,
      },
    });
    history.push('/');
  } catch (exception) {
    alert(exception.response.data);
  }
};

export const signOut = () => async (dispatch) => {
  dispatch({
    type: "SIGN_OUT",
    payload: {
      isLogged: false,
      user: {},
    },
  });
};