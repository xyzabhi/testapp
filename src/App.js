import { questions } from "./data.js";
import { useState } from "react";
import "./App.css";
import SubmitPage from "./components/SubmitPage";
import Question from "./components/Question.js";
import QuestionNav from "./components/QuestionNav.js";
import UserDetail from "./components/details/UserDetail.js";
import QuestionDetail from "./components/details/QuestionDetail.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
  const [sec, setSec] = useState(60);
  const [min, setMin] = useState(90);
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

  setInterval(() => {
    setMin(min - 1);
  }, 60000);
  function handleSubmit() {
    document.querySelector(".main").classList.add("main-none");
    document.querySelector(".sub-page").classList.add("sub-page-show");
  }
  return (
    <div>
      <div className="main">
        <div className="question-section">
          <div>
            <p className="timer">Time left: {min} min</p>
            <div className="lang">
              <p>Choose language</p>
              <select name="cars" id="cars">
                <option value="volvo">Hindi</option>
                <option value="saab">English</option>
                <option value="mercedes">Gujrati</option>
                <option value="audi">Tamil</option>
              </select>
            </div>
            <Question
              idx={currQ}
              qtext={questions[currQ].question_desc}
              options={questions[currQ].options}
              isanswered={selectedOption[currQ]}
              handler={updateSelectedAnswer}
              currQStat={isAnsweredStat}
            />
          </div>
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
        <div className="right">
          <div>
            <div className="user-detail">
              <UserDetail />
            </div>
            <div className="bd-box">
              <div className="question-detail">
                <QuestionDetail />
              </div>
              <p className="q-section">Level 1</p>
              <div className="nav-sec">
                <p className="choose-q">Choose a Question</p>
                <div className="question-nav">{renderedQuestionNav}</div>
              </div>
            </div>
          </div>
          <div className="submit-sec">
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="sub-page">
        <SubmitPage />
      </div>
    </div>
  );
  // return <Login />;
}

export default App;
