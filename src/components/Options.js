import { useQuiz } from "../context/QuizContext";
function Options({ questions }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  // Verifique se `questions` e `questions.options` existem
  if (!questions || !questions.options) {
    return <div>No options available.</div>;
  }

  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
