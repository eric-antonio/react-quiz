import { useQuiz } from "../context/QuizContext";
function NextButton() {
  const { numQuestions, index, dispatch, answer } = useQuiz();
  if (answer === null) return null;

  if (index < numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finished
      </button>
    );
  }
}

export default NextButton;
