import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLIENT_API } from "../../../utils/axios";
import { config } from "../../../common/services/configuration";

export const getUserData = createAsyncThunk(
  "user/getUserData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CLIENT_API.get("/api/users/getUser", config);
      if (response.data.success) {
        return response.data.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error: any) {
      console.log("Something went wrong in getUserData", error);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
