import customFetch,{checkForUnauthorizedResponse} from "../../untils/axios";
import authHeader from "../../untils/authHeader";

export const getAllJobsThunk =  async(_,thunkAPI)=>{
    const { search, searchStatus, searchType, sort } = thunkAPI.getState().allJobs;

let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}`;
if (search) {
    url = url + `&search=${search}`;
}
try {
    const resp = await customFetch.get(url, authHeader(thunkAPI));
    return resp.data;
} catch(error) {
    return checkForUnauthorizedResponse(error, thunkAPI)
}
}

export const showStatsThunk =  async(_, thunkAPI) => {
    try {
        const resp = await customFetch.get('/jobs/stats', authHeader(thunkAPI));
        return resp.data;
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}