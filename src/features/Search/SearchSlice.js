import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    radio : 'vehicle'
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setRadio: (state, {payload}) => {
            state.radio = payload;
        }
    }
});


export const { setRadio } = searchSlice.actions;
export const getRadio = (state) => state.search.radio;

export default searchSlice.reducer;