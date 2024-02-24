import { createSlice } from "@reduxjs/toolkit";

const CourseFormSlice = createSlice({
    name: 'courseForm',
    initialState: false,
    reducers: {
        toggleForm: (state, action) => {
            return !state;
        },
    }
});

export const { toggleForm } = CourseFormSlice.actions;

export default CourseFormSlice.reducer;
