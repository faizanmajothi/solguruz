import {createSlice} from "@reduxjs/toolkit";
let initialState={isLogged:false}
const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        isLoggedIn(state){
            state.isLogged = true;
        },
        isLoggedOut(state){
            state.isLogged = false
        }
    }
});
const authAction = AuthSlice.actions;
export {authAction,AuthSlice};