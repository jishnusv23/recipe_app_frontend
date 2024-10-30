import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLIENT_API } from "../../../utils/axios";
import { config } from "../../../common/services/configuration";

export const SignupAction = createAsyncThunk(
    'user/signup',
    async(data:any,{rejectWithValue})=>{
        try{
            const response = await CLIENT_API.post(`/api/users`, data, config);
            
            console.log("🚀 ~ file: SignupAction.tsx:11 ~ async ~ response:", response)
            if(response.data){
                return response.data
            }else{
                return rejectWithValue(response.data)
            }
        }catch(error:any){  
            console.error('Something issue in SignupAction',error);
            
        }
    }
);
