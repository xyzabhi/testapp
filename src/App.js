import { questions } from "./data.js";
import { useState } from "react";
import "./App.css";
import Question from "./components/Question.js";
import QuestionNav from "./components/QuestionNav.js";
import Login from "./components/Login.js";

function App() {
  // Initaliazing an array with null elements that means initially nothing is answered for each question
  const initailAnswer = [];
  for (let i = 0; i < questions.length; i++) {
    initailAnswer.push(null);
  }
  const [currQ, setCurrQ] = useState(0);
  const [currIsAnswered, setCurrIsAnswered] = useState(null);
  const [review, setReview] = useState(initailAnswer);
  const [notaAnswered, setNotAnswered] = useState(initailAnswer);
  const [answered, setAnswered] = useState(initailAnswer);
  const [selectedOption, setSelectedOption] = useState(initailAnswer);
  const renderedQuestionNav = questions.map((question, idx) => {
    return (
      <QuestionNav
        idx={idx}
        key={idx}
        handler={questionNavClickHandler}
        isReview={review[idx]}
        isAnswered={answered[idx]}
        currQ={currQ}
        isNotAnswered={notaAnswered[idx]}
      />
    );
  });
  function isAnsweredStat(idx) {
    setCurrIsAnswered(idx);
  }
  function questionNavClickHandler(idx) {
    setCurrQ(idx);
  }
  function updateSelectedAnswer(idx) {
    let temp = [...selectedOption];
    temp[currQ] = idx;
    setSelectedOption([...temp]);
  }
  return (
    <div className="main">
      <div className="question-section">
        <Question
          idx={currQ}
          qtext={questions[currQ].question_desc}
          options={questions[currQ].options}
          isanswered={selectedOption[currQ]}
          handler={updateSelectedAnswer}
          currQStat={isAnsweredStat}
        />
        <div className="btn-section">
          <div className="left-btn">
            <button
              onClick={() => {
                let temp = [...review];
                temp[currQ] = true;
                setReview([...temp]);
                setCurrQ(currQ + 1);
              }}
            >
              Mark for Review & Next
            </button>
            <button
              onClick={() => {
                console.log("clear response");
                let temp = [...selectedOption];
                temp[currQ] = null;
                setSelectedOption([...temp]);
              }}
            >
              Clear Response
            </button>
          </div>
          <div className="right-btn">
            <button
              onClick={() => {
                console.log("save and next");
                let temp = [...answered];
                temp[currQ] = true;
                setAnswered([...temp]);
                setCurrQ(currQ + 1);
                if (currIsAnswered === null) {
                  let x = [...notaAnswered];
                  x[currQ] = true;
                  setNotAnswered([...x]);
                  console.log(notaAnswered);
                  console.log("called");
                  setCurrIsAnswered(null);
                }
              }}
            >
              Save & Next
            </button>
          </div>
        </div>
      </div>
      <div className="x">
        <p className="choose-q">Choose a Question</p>
        <div className="question-nav">{renderedQuestionNav}</div>
      </div>
    </div>
  );
  // return <Login />;
}

export default App;
