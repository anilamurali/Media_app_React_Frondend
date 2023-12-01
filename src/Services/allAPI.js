
import { commonAPI } from './CommonAPI'
import { serverURL } from './ServerURL'

//  1. first request - upload video to the server

export const uploadVideo = async (reqBody)=>{
    // make post httpRequest to 'http://localhost:4000/vedios' to add vedio in the json 
    //  server return response to add component 

    return await commonAPI("post",`${serverURL}/vedios`,reqBody)
}
//get all vedios from the json server

export const getAllVedios = async ()=>{

     // make get httpRequest to 'http://localhost:4000/vedios' to view vedio in the json 
    //  server return response to viwe component 

    return await commonAPI("get",`${serverURL}/vedios`,"")

}
// get a particular vedio 
export const  getParticularVedio = async (id)=>{
     // make post httpRequest to 'http://localhost:4000/vedios/id' to view vedio in the json 
    //  server return response to view component (Vedio Card)
    
    return await commonAPI("get",`${serverURL}/vedios/${id}`,"")

}
// remove a particular vedio 
export const removeParticularVedio = async (id)=>{
// make delete httpRequest to 'http://localhost:4000/vedios/id' to remove vedio in the json 
    //  server return response to remove component (Vedio Card)

    return await commonAPI('delete',`${serverURL}/vedios/${id}`,{})


}

//  store watch history to json server
export const addToWatchHistory = async(vedioDetails)=>{
    // make post httpRequest to 'http://localhost:4000/watch-history' to add vedio in the json 
    //  server return response to  component (Vedio Card)

    return await commonAPI("post",`${serverURL}/watch-history`,vedioDetails)

}
// get watch history from json server
export const getWatchHistory = async () =>{

     // make get httpRequest to 'http://localhost:4000/vedios' to view vedio in the json 
    //  server return response to view wactch history 

    return await commonAPI("get",`${serverURL}/watch-history`,"")
}
//  store category to json server

export const addCategories = async (reqBody)=>{
    // make post httpRequest to 'http://localhost:4000/category' to add Category in the json 
    //  server return response to  component (Category)
    return await commonAPI("post",`${serverURL}/category`,reqBody)


}
// /get category 
export const getCategoris = async ()=>{
    // make get httpRequest to 'http://localhost:4000/category' to view category in the json 
    //  server return response to view Homepage
    return await commonAPI("get",`${serverURL}/category`,"")
     

}
// remove a particular category 
export const deleteCategory = async (id)=>{
    // make delete httpRequest to 'http://localhost:4000/vedios/id' to remove vedio in the json 
        //  server return response to remove component (Vedio Card)
    
        return await commonAPI('delete',`${serverURL}/category/${id}`,{})
    
    
    }

    //update category add content to all vedios

    export const updateCategory = async (id,body)=>{
        // make delete httpRequest to 'http://localhost:4000/vedios/id' to remove vedio in the json 
            //  server return response to remove component (Vedio Card)
        
            return await commonAPI('put',`${serverURL}/category/${id}`,body)
        
        
        }