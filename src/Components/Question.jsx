import { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"


function Question({ question, totalQuestions, currentQuestion, setAnswer }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showOptions, setShowOptions] = useState(false);
    const timerRef = useRef();
    const progressBarRef = useRef();
    const optionsTimerRef = useRef();
    const resetAndStartTimers = () => {

        if (timerRef.current) clearTimeout(timerRef.current);

        // Reset and restart timer bar
        if (progressBarRef.current) {
            progressBarRef.current.classList.remove("active");
            void progressBarRef.current.offsetWidth;
            progressBarRef.current.classList.add("active");
        }

        // After 30 seconds, move to the next question
        timerRef.current = setTimeout(() => {
            goToNextQuestion();
        }, 30 * 1000);
    };

    // Save answer and move to next question
    const goToNextQuestion = () => {
        resetTimers();
        setAnswer(selectedOption);
        setSelectedOption(null);
        setShowOptions(false);
    };

    // Reset all timers
    const resetTimers = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (optionsTimerRef.current) clearTimeout(optionsTimerRef.current);
        if (progressBarRef.current) progressBarRef.current.classList.remove("active");
    };

    // Runs when the question changes or when the component is first loaded. Initializes the timers and the progress bar.
    useEffect(() => {
        resetTimers();
        resetAndStartTimers();

        // Show options after 4 seconds
        optionsTimerRef.current = setTimeout(() => {
            setShowOptions(true);
        }, 4000);

        // Clean up when the component is unmounted
        return () => {
            resetTimers();
        };
    }, [currentQuestion]);

    return (
        <div className="question">
            <div className="question-count">
                <b> {currentQuestion} </b> / <b> {totalQuestions} </b>
            </div>
            {/* Progress Bar */}
            <div className="progress-bar" ref={progressBarRef}></div>
            <div className="image">
                <img src={question.media} alt="media" key={question.media} />
            </div>
            <div className="main">
                <div className="title">
                    <span>Soru {currentQuestion}:</span>
                    <p>{question.question}</p>
                </div>
                {/* Answer Options*/}
                <div className="options">
                    {showOptions ? (
                        question.options.map((option, index) => (
                            <div
                                className={index === selectedOption ? "option active" : "option"} // Highlight selected
                                key={index}
                                onClick={() => setSelectedOption(index)} // Record selection
                            >
                                {option}
                            </div>
                        ))
                    ) : (
                        <p className="loading"><i className="bi bi-arrow-clockwise"></i></p>
                    )}
                </div>
            </div>
            <div className="control">
                {/* If current question is last question, show "Finish Test "button. Otherwise, show "Next Question" button */}
                <button onClick={goToNextQuestion}>
                    {currentQuestion === totalQuestions ? "Testi Bitir" : "Sıradaki Soru"}
                </button>
            </div>
        </div>
    );
}

export default Question;
