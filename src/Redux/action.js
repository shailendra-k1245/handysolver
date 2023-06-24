export const ADD_JOBS = "ADD_JOBS";

export const addJobs = (data)=>{
    return {
        type:ADD_JOBS,
        payload:data
    }
}