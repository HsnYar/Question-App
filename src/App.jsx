import { useState } from 'react'
import './App.css'
import QuizScreen from './Components/QuizScreen.jsx'
import JoinScreen from './Components/JoinScreen.jsx'

function App() {
    const [isQuizStarted, setIsQuizStarted] = useState(false)
  return (
    <>
        <div className="container">
            {isQuizStarted ? (
                // If the quiz has started, display the QuizScreen
                <QuizScreen retry = {()=> setIsQuizStarted(false)}/> // Retry function
            ) : (
                // If the quiz has not started, display the JoinScreen
                <JoinScreen start = {() => setIsQuizStarted(true)}/> // Start function
            )}
        </div>
    </>
  )
}

export default App
