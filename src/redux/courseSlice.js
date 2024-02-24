import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    addCourse: (state, action) => {
      const { name, imageUrl,id } = action.payload;
      state.push({ name, imageUrl,id });
    },
  },
});

export const { addCourse } = courseSlice.actions;
export default courseSlice.reducer;
