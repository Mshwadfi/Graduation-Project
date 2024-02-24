import React, { useState } from 'react';
// import { logo_url } from '../../utils/constants';
import AddCourse from './AddCourse';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Course from './Courses.js'; 
import Header from '../mainComponents/Header.js'

const InstructorDashboard = () => {
    const courses = useSelector(state => state.courses); 
    const [showAddCourse , setShowAddCourse] = useState(false);
    return (
        <div>
            <Header />
           
            <div className="main-home main-item active">
                <div className="home-content">
                    {showAddCourse && <AddCourse />}
                    {showAddCourse && courses.map((course, index) => (
                        <Course key={index} course={course} />
                    ))}
                </div>
            </div>
           
        </div>
    );
}

export default InstructorDashboard;
