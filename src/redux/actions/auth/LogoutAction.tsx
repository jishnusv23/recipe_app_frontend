
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../../common/services/configuration";
import { CLIENT_API } from "../../../utils/axios";

export const logoutAction = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await CLIENT_API.delete("/api/users/logout", config);
      if (response.data.success) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error: any) {}
  }
);
