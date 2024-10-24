import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLIENT_API } from "../../../utils/axios";
import { config } from "../../../common/services/configuration";

export const GetWishlistAction=createAsyncThunk(
    'user/getWishlist',
    async(userId:string,{rejectWithValue})=>{
        try{
            const response = await CLIENT_API.get(`/api/wishlist/${userId}`);
            if(response.data){
                return response.data
            }else{
                return rejectWithValue(response.data)
            }

        }catch(error:any){
            console.error('something issuse in getWishlist',error);
            
        }
    }
)