import Options from "./Options";
import { useQuiz } from "../context/QuizContext";
function Question() {
  const { questions, index, status } = useQuiz();

  // Certifique-se de que o estado é tratado corretamente
  if (status === "loading") return <div>Loading question...</div>;
  if (status === "error") return <div>Failed to load question.</div>;

  const question = questions.length > 0 ? questions[index] : null;

  // Verifique se `question` existe
  if (!question) {
    return <div>No question available.</div>;
  }

  return (
    <div>
      <h3>Answer the following question:</h3>
      <h4>{question.question}</h4>
      <Options questions={question} />
    </div>
  );
}

export default Question;

