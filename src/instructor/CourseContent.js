import { Link, useParams } from "react-router-dom";
import Header from "../mainComponents/Header";
import { useState } from "react";
import CreateQuiz from '../َquiz/CreateQuiz'
import { useDispatch } from "react-redux";
import { submitQuiz } from "../redux/quizSlice";
const CourseContent = () => {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    console.log(courseId,"id")
    const [ShowCreateQuizForm , setShowCreateQuizForm] = useState(false); 
    const handleCreateQuiz = ()=> {
        setShowCreateQuizForm(!ShowCreateQuizForm);
        dispatch(submitQuiz())
    }

    return (
        <>
      <div className="cont">
      {/* <Header /> */}

      <div className='instructor'>
      <Header />
             <div className='container'>
             <div className='quiz-container'>
             {ShowCreateQuizForm && <CreateQuiz />}
             </div>
        
                {/* {ShowCreateQuizForm && <CreateQuiz />} */}
      
        </div>
        <button className='add-course-button' onClick={handleCreateQuiz}>+</button>
        </div>  
        {/* <button className='add-course-button' onClick={handleCreateQuiz}>+</button> */}
 
      </div>
       </>
    );
}

export default CourseContent;
