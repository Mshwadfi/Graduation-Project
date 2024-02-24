import { createBrowserRouter,RouterProvider } from "react-router-dom";
import AboutUs from './AboutUs'
import Contact from './Contact'
import Login from './Login'
import Home from './Home'
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from '../redux/userSlice';
import AddCourse from "../instructor/AddCourse";
import CourseContent from "../instructor/CourseContent";

const Body = () =>{

    const dispatch = useDispatch();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
            } else {
                dispatch(removeUser());
            }
        });
    }, [dispatch]);

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/browse',
            element: <Browse />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/about',
            element: <AboutUs />
        },
        {
            path: '/addcourse',
            element: <AddCourse />
        },
        {
            path: '/course/:courseId', 
            element: <CourseContent />
        },        
    ]);
    return(
        <div>
        <RouterProvider router={appRouter} />
    </div>
    )
}

export default Body;