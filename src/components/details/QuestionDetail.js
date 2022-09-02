import "./question-detail.css";

export default function QuestionDetail() {
  return (
    <div className="question-detail-box">
      <div className="instruction-box">
        <span className="ans common-box"></span>
        <span>Answered</span>
      </div>
      <div className="instruction-box">
        <span className="not-ans common-box"></span>
        <span>Not Answered</span>
      </div>
      <div className="instruction-box">
        <span className="reviewed common-box"></span>
        <span>Marked for Review</span>
      </div>
      <div className="instruction-box">
        <span className="not-visit common-box"></span>
        <span>Not Visited</span>
      </div>
    </div>
  );
}
