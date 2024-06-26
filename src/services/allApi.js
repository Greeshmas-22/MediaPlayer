import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"


//api to add video
 export const addVideoApi = async(reqbody)=>{
    return  await commonApi('POST',`${serverUrl}/videos`,reqbody)
}

//api to get all video
export const getVideoApi = async()=>{
    return await commonApi('GET',`${serverUrl}/videos`,"")
}

//api to delete video

export const deleteVideoApi = async(id)=>{
 return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
   
}

//api to add video to watch history

export const addToHistroyApi = async(reqbody )=>{
    return await   commonApi('POST', `${serverUrl}/histroy`,reqbody )
}

// api to get video from watch history

export const getVideoFromHistroyApi = async()=>{
    return await commonApi('GET',`${serverUrl}/histroy`,"")
}

// api to delete video from history

export const deleteVideoFromHistroy = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/histroy/${id}`,{})
}

//api to add category 

 export const addCategoryApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqbody)
 }

 //api to get all category

 export const AllCategoryApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`,"")
 }

 //api to delte category

 export const deleteCategoryApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
 }

 //api to get a video

 export const AvideoApi = async(id)=>{
    return await commonApi('GET',`${serverUrl}/videos/${id}`,"")
 }

 //api to update category

 export const updateCategoryApi = async(id, reqbody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${id}`,reqbody)
 }