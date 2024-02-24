import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitQuiz } from "../redux/quizSlice";

const QuestionsPerPage = 5; 

const Quiz = () => {
  const quizData = useSelector((state) => state.quiz);
  const [currentPage, setCurrentPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch();

  const handleUserAnswer = (index, value) => {
    if (!showResult) {
      const updatedUserAnswers = [...userAnswers];
      updatedUserAnswers[index] = value;
      setUserAnswers(updatedUserAnswers);
    }
  };

  const handleUserMultipleAnswers = (index, choiceIndex, checked) => {
    if (!showResult) {
      const updatedUserAnswers = [...userAnswers];
      if (!updatedUserAnswers[index]) {
        updatedUserAnswers[index] = [];
      }
      if (checked) {
        updatedUserAnswers[index].push(choiceIndex);
      } else {
        updatedUserAnswers[index] = updatedUserAnswers[index].filter((item) => item !== choiceIndex);
      }
      setUserAnswers(updatedUserAnswers);
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < quizData.length; i++) {
      const question = quizData[i];
      const answer = userAnswers[i];
      if (question.type === 'mcq' && answer === question.correctAnswer) {
        score++;
      } else if (question.type === 'multiple' && arraysEqual(answer, question.selectedAnswers)) {
        score++;
      }
    }
    return score;
  };

  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!showResult && currentPage < Math.ceil(quizData.length / QuestionsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (!showResult && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResult(true);
    // dispatch(submitQuiz());
  };
  console.log(quizData.length);
  const renderQuestions = () => {
    const startIndex = currentPage * QuestionsPerPage;
    const endIndex = Math.min(startIndex + QuestionsPerPage, quizData.length);

    return quizData.slice(startIndex, endIndex).map((question, index) => (
      <div key={index} className="question">
        <p>{question.question}</p>
        <div className="choices">
          {question.choices.map((choice, choiceIndex) => (
            <div key={choiceIndex} className="choice">
              {question.type === "mcq" ? (
                <label>
                  <input
                    type="radio"
                    value={choiceIndex}
                    checked={userAnswers[startIndex + index] === choiceIndex}
                    onChange={() => handleUserAnswer(startIndex + index, choiceIndex)}
                    disabled={showResult}
                  />
                  {choice}
                </label>
              ) : (
                <label>
                  <input
                    type="checkbox"
                    value={choiceIndex}
                    checked={userAnswers[startIndex + index] && userAnswers[startIndex + index].includes(choiceIndex)}
                    onChange={(e) => handleUserMultipleAnswers(startIndex + index, choiceIndex, e.target.checked)}
                    disabled={showResult}
                  />
                  {choice}
                </label>
              )}
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <div className="quiz">
      <h2>Quiz</h2>
      <form onSubmit={handleSubmit}>
        {renderQuestions()}
        <div className="button-container">
          <button type="button" onClick={handlePrev} disabled={currentPage === 0 || showResult}>
            Previous
          </button>
          <button type="button" onClick={handleNext} disabled={currentPage === Math.ceil(quizData.length / QuestionsPerPage) - 1 || showResult}>
            Next
          </button>
          {!showResult && currentPage === Math.ceil(quizData.length / QuestionsPerPage) - 1 && (
            <button type="submit">Submit Quiz</button>
          )}
        </div>
      </form>
      {showResult && (
        <div className="result">
          <h3>Your Score: {calculateScore()} / {quizData.length}</h3>
        </div>
      )}
    </div>
  );
};
  


export default Quiz;
