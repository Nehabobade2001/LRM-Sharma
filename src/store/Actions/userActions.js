import { toast } from "react-toastify";

//import axios from "../../../axiosConfig";
import { SetUser, RemoveUser } from "../Reducers/userReducer";
import axios from 'axios'


 const setUser = () => async (dispatch, getState) => {
    try {
        const res = await axios.get("/");
        console.log(res);
        dispatch(SetUser(res.data.user))
    } catch (error) {
        console.log(error.response.data.message);
        
    }
};

 const asyncCurrentUser = () => async (dispatch, getState) => {
    try {
        const res = await axios.get("https://lrm-backend.onrender.com/api/auth/currentUser");
        // console.log("called!")
       
        
    } catch (error) {
        console.log(error.response?.data?.message);
        
    }
};

 const asyncUserSignup = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("https://lrm-backend.onrender.com/api/auth/register", user);
        // console.log(res.data.user);
        dispatch(SetUser(res.data.user));
        toast.success('Successfully Registered!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    } catch (error) {
        console.log(error.response?.data?.message);
        toast.error(error.response?.data?.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
};

 const asyncUserSignin = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("https://lrm-backend.onrender.com/api/v1/user/login", user)
        dispatch(SetUser(res.data.user));
        
        toast.success('Successfully Logged In!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    } catch (error) {
        console.log(error.response?.data?.message);
        toast.error(error.response?.data?.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
};


const asyncUserSignout = () => async (dispatch, getState) => {
    try {
      const res = await axios.post("https://lrm-backend.onrender.com/api/auth/logout", { withCredentials: true });
      dispatch(RemoveUser(res));
      await persistor.purge();
      toast.success('Successfully Logged Out!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };



export  { setUser, asyncUserSignup,asyncUserSignin,  asyncCurrentUser, asyncUserSignout};
