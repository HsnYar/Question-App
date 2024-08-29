// Component that displays the quiz results
function QuizResult({ result, retry }) {
    return (
        <div className="result-screen">

            {/* Quiz Score */}
            <h2>Puanın: {result.percentage}</h2>
            <p>
                {result.total} sorudan {result.correct} tanesine doğru cevap verdin.
            </p>

            {/* List of incorrect answers */}
            {result.incorrectQuestions.length > 0 && (
                <div>
                    <h3>Yanlış Cevapladığın Sorular:</h3><br/>
                    <ul>
                        {result.incorrectQuestions.map((item, index) => (
                            <li key={index}>
                                    {/* Shows only the question number and the correct/incorrect answers */}
                                    <p><strong>Soru {item.questionNumber}:</strong></p>
                                    <p>Senin Cevabın: <span className="wrong">"{item.selectedAnswer}"</span> </p>
                                    <p>Doğru Cevap: <span className="true">"{item.correctAnswer}"</span></p><br/>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <button onClick={retry}>Tekrar Dene</button>
        </div>
    );
}

export default QuizResult;
