import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const Course = ({ course }) => {
    console.log(course.id);
   
    return (
<Link to={`/course/${course.id}`} className="course-link">
            <div className="course-card">
                <div className="course-card-img">
                    <img src={course.imageUrl} alt='course img' />
                </div>
                <div className="course-card-info">
                    <h2 className="card-name">{course.name}</h2>
                    <button className="manage-course-button">Manage Course</button>
                    <p className="card-code">{course.code}</p>
                </div>{console.log("hghg" ,course.id)}
            </div>
        </Link>
    );
};

export default Course;
