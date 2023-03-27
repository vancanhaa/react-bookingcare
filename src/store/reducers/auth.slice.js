import { createSlice } from "@reduxjs/toolkit";
import { LocalStorageUlti } from "../../utils";
import { loginAction, registerAction } from "../actions/auth.action";
const USER_INFO_KEY = "user_info";
const { get, set, remove } = LocalStorageUlti(USER_INFO_KEY, null);
const userInfoFromStorage = get();
const initialState = {
  userInfo: userInfoFromStorage,
  loading: false,
  error: null,
  isRegisterSuccess: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    //login
    builder.addCase(loginAction.pending, (state, action) => {
      remove();
      state.userInfo = {
        ...state.userInfo,
        loading: true,
      };
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      const userInfoResponse = { ...action.payload.userInfo };
      set(userInfoResponse);
      state.userInfo = userInfoResponse;
      state.loading = false;
    });
    builder.addCase(loginAction, (state, action) => {
      remove();
      state.loading = false;
      ///notification login success
    });

    //register
    builder.addCase(registerAction.pending, (state, action) => {
      remove();
      state.loading = true;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.userInfo = null;
      state.loading = false;
      state.isRegisterSuccess = true;
      //notifiation register success
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      remove();
      state.loading = false;
      //notification register fail
    });
  },
  reducers: {
    logOut: (state, action) => {
      remove();
      state.userInfo = null;
    },
    changeIsRegisterSuccess: (state, action) => {
      state.isRegisterSuccess = false;
    },
  },
});

export const { logOut, changeIsRegisterSuccess } = authSlice.actions;
export const authReducer = authSlice.reducer;
