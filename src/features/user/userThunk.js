import customFetch,{checkForUnauthorizedResponse} from "../../untils/axios";
import { logoutUser } from "./userSlice";
import authHeader from '../../untils/authHeader'
import { clearValues } from "../job/jobSlice";
import { clearAllJobsState } from "../allJobs/allJobsSlice";

export const registerUserThunk = async(url, user, thunkAPI) => {
    try{
        const resp = await customFetch.post(url, user, authHeader(thunkAPI))
        return resp.data.msg;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

export const loginUserThunk = async(url, user, thunkAPI) => {
    try{
        const resp = await customFetch.post(url, user)
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

export const updateUserThunk = async(url, user, thunkAPI) => {
    try{
        const resp = await customFetch.patch(url, user, authHeader(thunkAPI));
        return resp.data;
    }   catch (error) { 
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}

export const clearStoreThunk = async (message, thunkAPI) => {
    try{
        thunkAPI.dispatch(logoutUser(message));
        thunkAPI.dispatch(clearAllJobsState());
        thunkAPI.dispatch(clearValues());
        return Promise.resolve();
    } catch (error) {
        return Promise.reject();
    }
}