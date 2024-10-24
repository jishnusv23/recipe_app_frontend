import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLIENT_API } from "../../../utils/axios";
import { config } from "../../../common/services/configuration";


export const AddWishlistAction=createAsyncThunk(
    'user/addwishlist',
    async(data:{userId:string,productId:string},{rejectWithValue})=>{
        try{
            const resonse = await CLIENT_API.put(`/api/wishlist`, data, config);
            if (resonse.data) {
              return resonse.data;
            } else {
              return rejectWithValue(resonse.data);
            }
        }catch(erro:any){
            console.error('someting wrong in AddWishlst');
            
        }
    }
    
)