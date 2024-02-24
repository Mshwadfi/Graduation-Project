import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuiz } from '../redux/quizSlice';
import Quiz from './DoQuiz';

const CreateQuiz = () => {
    const [numQuestions, setNumQuestions] = useState('');
    const [questions, setQuestions] = useState([]);
    const [solveForm , setSolveForm] = useState(false);
    const [currentPage , setCurrentPage] = useState(0);
    const dispatch = useDispatch();

    
    const handleNumQuestionsChange = (e) => {
        const numberOfQuestions = parseInt(e.target.value);
        if (!isNaN(numberOfQuestions) && numberOfQuestions >= 0) {
            setNumQuestions(numberOfQuestions);
            setQuestions(Array(numberOfQuestions).fill().map(() => ({
                type: 'mcq', 
                question: '',
                choices: ['', '', '', ''],
                correctAnswer: 0,
                selectedAnswers: [], 
                answer: '',
            })));
        } else {
            setNumQuestions('');
            setQuestions([]);
        }
    };

    const handleQuestionChange = (e, index) => {
        const newQuestions = [...questions];
        newQuestions[index].question = e.target.value;
        setQuestions(newQuestions);
    };

    const goToNextPage = () =>{
        setCurrentPage((page) => page + 1);
    }
    const goToPrevPage = () =>{
        setCurrentPage((page) => page - 1);
    }
    const startIndex = (currentPage) * 5;
    const endIndex = Math.min(startIndex + 5 , questions.length);

    const displayedQuestions = questions.slice(startIndex , endIndex);
    const handleChoiceChange = (e, questionIndex, choiceIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].choices[choiceIndex] = e.target.value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (choiceIndex, questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].correctAnswer = choiceIndex;
        setQuestions(newQuestions);
    };

    const handleSelectedAnswerChange = (e, questionIndex, choiceIndex) => {
        const newQuestions = [...questions];
        const selectedAnswers = newQuestions[questionIndex].selectedAnswers;
        if (e.target.checked) {
            selectedAnswers.push(choiceIndex);
        } else {
            const index = selectedAnswers.indexOf(choiceIndex);
            if (index !== -1) {
                selectedAnswers.splice(index, 1);
            }
        }
        newQuestions[questionIndex].selectedAnswers = selectedAnswers;
        setQuestions(newQuestions);
    };

    const handleTypeChange = (e, questionIndex) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].type = e.target.value;
        setQuestions(newQuestions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addQuiz([...questions]));
        setNumQuestions('');
        setQuestions([]);
        setSolveForm(!solveForm);
    };
   

   

    return solveForm ? <Quiz /> :(
        <div className="create-quiz">
            <h2>Create Quiz</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="numQuestions">Number of Questions:</label>
                <input
                    type="number"
                    id="numQuestions"
                    value={numQuestions}
                    onChange={handleNumQuestionsChange}
                    required
                />
                <button type="submit" onClick={handleNumQuestionsChange}>Generate Questions</button>
            </form>
            {displayedQuestions.map((question, index) => (
                <div key={index} className="question">
                    <label htmlFor={`question-${index}`}>Question {index + 1+startIndex}:</label>
                    <input
                        type="text"
                        id={`question-${index}`}
                        value={question.question}
                        onChange={(e) => handleQuestionChange(e, index)}
                        required
                    />
                    <label>Type:</label>
                    <select
                        value={question.type}
                        onChange={(e) => handleTypeChange(e, index)}
                        required
                    >
                        <option value="mcq">Multiple Choice</option>
                        <option value="multiple">Select Multiple Answers</option>
                        <option value="write">Write-in Answer</option>
                    </select>
                    {/* {(question.type === 'mcq' || question.type === 'multiple') && (
                        <>
                            <label>Choices:</label>
                            {question.choices.map((choice, choiceIndex) => (
                                <div key={choiceIndex}>
                                    <input
                                        type="text"
                                        value={choice}
                                        onChange={(e) => handleChoiceChange(e, index, choiceIndex)}
                                        required
                                    />
                                </div>
                            ))}
                        </>
                    )} */}
                    {question.type === 'mcq' && (
                         <>
                         <label>Choices:</label>
                         {question.choices.map((choice, choiceIndex) => (
                             <div key={choiceIndex}>
                                 <input
                                     type="radio"
                                     checked={question.correctAnswer === choiceIndex}
                                     onChange={(e) => handleCorrectAnswerChange(choiceIndex, index)}
                                     name={`choice-${choiceIndex}`} // Add a unique name for each question
                                 />
                                 <input
                                     type="text"
                                     value={choice}
                                     onChange={(e) => handleChoiceChange(e, index, choiceIndex)}
                                     required
                                 />
                             </div>
                         ))}
                     </>
                    )}
                    {question.type === 'multiple' && (
    <>
        <label>Choices:</label>
        {question.choices.map((choice, choiceIndex) => (
            <div key={choiceIndex}>
                <input
                    type="checkbox"
                    checked={question.selectedAnswers.includes(choiceIndex)}
                    onChange={(e) => handleSelectedAnswerChange(e, index, choiceIndex)}
                />
                <input
                    type="text"
                    value={choice}
                    onChange={(e) => handleChoiceChange(e, index, choiceIndex)}
                    required
                />
            </div>
        ))}
    </>
)}

                </div>
            ))}
            {numQuestions > 5 && (
                <div>
                    {currentPage > 0 && (
                        <button onClick={goToPrevPage}>Prev</button>
                    )}
                     {currentPage < Math.ceil(numQuestions / 5) && (
                        <button onClick={goToNextPage}>Next</button>
                    )}
                </div>
            )}
            {numQuestions > 0 && (
                <button type="submit" onClick={handleSubmit}>Submit Quiz</button>
            )}
        </div>
    );
};

export default CreateQuiz;