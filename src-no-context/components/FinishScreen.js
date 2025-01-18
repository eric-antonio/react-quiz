function FinishScreen({dispatch, points, maxPointsPossible ,highScore}) {
  const percentage = (points / maxPointsPossible) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎉";
  else if (percentage >= 80) emoji = "👏";
  else if (percentage >= 60) emoji = "👍";
  else if (percentage >= 50) emoji = "😕";
  else if (percentage >= 30) emoji = "😐";
  else emoji = "👎";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You have Scored <strong>{points}</strong> Points. <br />
        Out of a possible <strong>{maxPointsPossible}</strong> Points{" "}
        <strong> ({Math.ceil(percentage)}%).</strong>
      </p>
      <p className="highscore"> (HighScore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
