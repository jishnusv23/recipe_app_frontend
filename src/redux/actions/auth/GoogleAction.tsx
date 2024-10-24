import { createAsyncThunk } from "@reduxjs/toolkit";
import { CLIENT_API } from "../../../utils/axios";
import { config } from "../../../common/services/configuration";

export const GoogleAction = createAsyncThunk(
  "user/googleauth",
  async (data: any, { rejectWithValue }) => {
    try {
      const response = await CLIENT_API.post(
        `/api/users/google-auth`,
        data,
        config
      );
      if (response.data) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error: any) {
      console.error("Something is wrong in GoogleAuthAction", error);
      return rejectWithValue(
        error?.response.data || "Something wrong googleAction"
      );
    }
  }
);
