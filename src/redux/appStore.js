import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';
import courseReducer from './courseSlice';
import quizReducer from './quizSlice'
import courseFormReducer from './CourseFormSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        courses: courseReducer,
        quiz: quizReducer,
        courseForm: courseFormReducer,
    }
});

export default appStore;
