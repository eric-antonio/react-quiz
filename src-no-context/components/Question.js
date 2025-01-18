import Options from "./Options";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <h3>
        Answer the Following Question and see how far are yur are ,to become a Mastery in React{" "}
      </h3>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
