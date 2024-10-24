import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignupAction } from "../actions/auth/SignupAction";
import { SignupForm } from "../../types/IForm";
import { LoginAction } from "../actions/auth/LoginAction";
import { getUserData } from "../actions/auth/getUserData";

export interface UserState {
  loading: boolean;
  data: SignupForm | null;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  data: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    storeUserData: (state: UserState, action: PayloadAction<SignupForm>) => {
      state.data = action.payload;
    },
    makeErrorDisble: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginAction.pending, (state: UserState) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(
        LoginAction.fulfilled,
        (state: UserState, action: PayloadAction<SignupForm>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
        }
      )
      .addCase(LoginAction.rejected, (state: UserState, action) => {
        (state.loading = false), (state.data = null);
        state.error = action.error.message || "Signup Failed ";
      })
      .addCase(getUserData.pending, (state: UserState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getUserData.fulfilled,
        (state: UserState, action: PayloadAction<SignupForm>) => {
          // console.log("herer reached", action.payload);

          state.loading = false;
          state.data = action.payload;
          state.error = null;
          // console.log(action.payload, "-ioioioioi--");
        }
      )
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        if (typeof action.error.message === "string") {
          state.error = action.error.message;
        } else {
          state.error = "Failed to load user data";
        }
      });
  },
});

export const { storeUserData, makeErrorDisble } = userSlice.actions;
export const userReducer = userSlice.reducer;
