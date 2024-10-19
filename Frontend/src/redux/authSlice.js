import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth", // ye slice ka name define karta he 
    initialState: { // ye slice ka initial state define karta he 
        loading: false,
        user:null,
    },
    reducers: { // reducers ka kam state ko update karna hota he 
        setLoading:(state, action) => {
            state.loading = action.payload; // payload : action ke saath jo extra information bhajte ho vo payload hi he  
        },
        setUser: (state, action) => {
            state.user = action.payload;
        }

    }
})
 

export const  {setLoading, setUser} = authSlice.actions;
export default authSlice.reducer;