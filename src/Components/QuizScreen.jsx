import { useState } from "react";
import QuestionList from "../Data/questions.js";
import Question from "./Question.jsx";
import QuizResult from "./QuizResult.jsx";

function QuizScreen({ retry }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [markedAnswers, setMarkedAnswers] = useState(new Array(QuestionList.length));
    const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    // Function to calculate the user's results
    function calculateResult() {
        let correct = 0;   // Number of correct answers
        let incorrectQuestions = [];  // List of incorrect answers

        // Count correct answers
        QuestionList.forEach((question, index) => {
            if (question.answer === question.options[markedAnswers[index]]) {
                correct++;
            } else {
                // Record incorrect answers
                incorrectQuestions.push({
                    questionNumber: index + 1,
                    selectedAnswer: markedAnswers[index] !== null ? question.options[markedAnswers[index]] : "Cevaplanmadı", // Unanswered questions
                    correctAnswer: question.answer,
                });
            }
        });

        return {
            total: QuestionList.length,
            correct: correct,
            percentage: Math.trunc((correct / QuestionList.length) * 100), // Calculate points based on correct answers
            incorrectQuestions: incorrectQuestions,
        };
    }


    return (
        <div className="quiz-screen">
            {isQuestionEnd ? (
                <QuizResult result={calculateResult()} retry={retry} />  // Display result screen
            ) : (
                // Display question screen
                <Question
                    question={QuestionList[currentQuestionIndex]}
                    totalQuestions={QuestionList.length}
                    currentQuestion={currentQuestionIndex + 1}
                    setAnswer={(index) => {
                        // Save selected answer and move to the next question
                        setMarkedAnswers((arr) => {
                            let newArr = [...arr];
                            newArr[currentQuestionIndex] = index;
                            return newArr;
                        });
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                    }}
                />
            )}
        </div>
    );
}

export default QuizScreen;
