import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
    name: "search",
    initialState: {
        form: {
            search: "",
        },
        giphy: [],
    },
    reducers: {
        formChange: (state, action) => {
           const { name, value } = action.payload.target;
              state.form[name] = value;
              
        }
    },
    handleSubmit: (state, action) => {},
});
export const { formChange } = searchSlice.actions;
export default searchSlice.reducer;
