import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Header from './Header';
import StudentUI from '../student/StudentUI';
import TeacherUI from '../instructor/InstructorUi';
import {toggleForm} from '../redux/CourseFormSlice'
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import AddCourse from '../instructor/AddCourse';
import Courses from '../instructor/Courses'

const Browse = () => {
    
    const user = useSelector(store => store.user);
    const courses = useSelector(state => state.courses); 
    const showCourseForm = useSelector(store => store.courseForm)
   const userRole = user?.displayName;
    const dispatch = useDispatch();
   const handleToggleForm = () =>{
        dispatch(toggleForm(!showCourseForm));
   }
   console.log(user);
   console.log(showCourseForm);
    return (
       <>
      <div className='instructor'>
      <Header />
             <div className='container'>
        
           
           
            {userRole === 'student'? <StudentUI /> : <TeacherUI />}
            {showCourseForm && <AddCourse />}
            <div className='courses-container'>
            {!showCourseForm && courses.map((course, index) => (
                
                <Courses key={index} course={course} />
            ))}   
            </div>
              

            {/* <Footer /> */}
      
        </div>
        <button className='add-course-button' onClick={handleToggleForm}>+</button>
        </div>   
       </>
    );
};

export default Browse;
