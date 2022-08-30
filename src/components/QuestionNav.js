import "./question-nav-circle.css";
export default function QuestionNav({
  idx,
  handler,
  isReview,
  isAnswered,
  currQ,
  isNotAnswered,
}) {
  return (
    <div
      className={`question-nav-circle ${isReview ? "review" : ""} ${
        isAnswered ? "answered" : ""
      } ${currQ === idx ? "curr" : ""} ${isNotAnswered ? "not-answered" : ""}`}
      onClick={() => {
        handler(idx);
      }}
    >
      {idx + 1}
    </div>
  );
}
