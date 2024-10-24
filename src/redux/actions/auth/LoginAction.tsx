import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginForm } from "../../../types/IForm";
import { CLIENT_API } from "../../../utils/axios";
import { config } from "../../../common/services/configuration";

export const LoginAction = createAsyncThunk(
  "user/login",
  async (data: LoginForm, { rejectWithValue }) => {
    try {
      const response = await CLIENT_API.post(`/api/users/login`, data, config);
      console.log(
        "🚀 ~ file: LoginAction.tsx:13 ~ async ~ response:",
        response
      );
      if (response.data) {
        return response.data;
      } else {
        return rejectWithValue(response.data);
      }
    } catch (error: any) {
      console.error("Something wrong in LoginAction:", error);
      return rejectWithValue(error?.response.data || "loginAction Failed");
    }
  }
);
