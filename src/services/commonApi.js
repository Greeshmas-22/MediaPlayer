import axios from "axios"


 export const commonApi = async(httpRequest ,url ,reqBody)=>{
 
    let reqconfig={
        method:httpRequest,
        url,// key value same name url so can give only url,
        data:reqBody,
        headers:{"Content-Type":'application/json'}

    }
    return await axios(reqconfig).then((result)=>{
        return result
     }).catch((err)=>{
        return err
     })
}


