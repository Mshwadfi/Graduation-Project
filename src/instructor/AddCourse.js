import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCourse } from '../redux/courseSlice';
import { toggleForm } from '../redux/CourseFormSlice';

const AddCourse = () => {
    const [courseName, setCourseName] = useState('');
    const [courseID, setCourseID] = useState('');
    const [courseImageUrl, setCourseImageUrl] = useState('');
    const dispatch = useDispatch();

    const handleCourseNameChange = (event) => {
        setCourseName(event.target.value);
    };

    const handleCourseIdChange = (event) =>{
        setCourseID(event.target.value);
    };

    const handleCourseImageUrlChange = (event) => {
        setCourseImageUrl(event.target.value);
    };

    const handleCreateCourse = () => {
        console.log("Creating course with ID:", courseID);
        dispatch(addCourse({ name: courseName, imageUrl: courseImageUrl, id: courseID }));
        setCourseName('');
        setCourseImageUrl('');
        setCourseID('');
    };

    const handleChange = () => {
        handleCreateCourse();
        dispatch(toggleForm());
    };

    return (
        <div className="add-course-container">
            <div className="form-container">
                <h2>Add New Course</h2>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Course Name"
                        value={courseName}
                        onChange={handleCourseNameChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Course Id"
                        value={courseID}
                        onChange={handleCourseIdChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Course Image URL"
                        value={courseImageUrl}
                        onChange={handleCourseImageUrlChange}
                    />
                </div>
                {courseImageUrl && (
                    <img src={courseImageUrl} alt="Course Preview" style={{ maxWidth: '200px' }} />
                )}
                <div className="button-container">
                    <button onClick={handleChange}>Create Course</button>
                    <Link to="/browse">Back to Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;
