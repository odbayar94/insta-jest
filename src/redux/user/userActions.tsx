import { Dispatch } from 'redux';
import axios from "axios";
import Cookies from "js-cookie";

//My own import
import { REST_API_URL } from '../constants';
import userTypes from './userTypes';


interface IUserPost {
  username: string,
  password: string,
  user?: any,
}
export const loginUser = ({username, password}: IUserPost) => async (dispatch: Dispatch)=> {
    

    dispatch(loginUserStart());
    
      axios
      .post(REST_API_URL + "/users/login", { username, password })
      .then((result) => {
          dispatch(loginUserSuccess(result.data));
      })
      .catch((err) => {
        if(!err.response){
          const error = {
            response:{
                          data:{
                            error:{
                              message: "Сервертэй холбогдоход алдаа гарлаа"
                            }
                          }
                        }};
          
          dispatch(loginUserError(error));
        }else{
          dispatch(loginUserError(err));
        }
      });
    
}

export const loginUserStart = () => {
    return {
      type: userTypes.SIGN_IN_START,
    };
  };


  export const loginUserSuccess = (data: any) => {
    Cookies.set("token",  data.user.token);
    return {
      type: userTypes.SIGN_IN_SUCCESS,
      token: data.user.token,
      userId: data.user.userId,
    };
  };
  
  export const loginUserError = (error: any) => {
    return {
      type: userTypes.SIGN_IN_FAILURE,
      errorMessage: error.response.data.error.message,
    };
  };  


  export function logOut (){
   Cookies.remove("token");
    return {
      type: userTypes.LOGOUT,
    };
  };