import Option from "./Option";
import { useState } from "react";
export default function Question({
  idx,
  qtext,
  options,
  isanswered,
  handler,
  currQStat,
}) {
  const [selected, setSelected] = useState(null);
  const renderedOptions = options.map((option, idx) => {
    if (isanswered === idx)
      return (
        <Option
          option={option}
          idx={idx}
          class="active"
          handler={optionHandler}
          key={idx}
        />
      );
    else
      return (
        <Option
          key={idx}
          option={option}
          idx={idx}
          class=""
          handler={optionHandler}
        />
      );
  });
  function optionHandler(idx) {
    setSelected(idx);
    handler(idx);
    currQStat(idx);
  }

  return (
    <div className="question">
      <h3 className="qno">Question No. {idx + 1}</h3>
      <div className="question-content">
        <p className="question-text">{qtext}</p>
        {renderedOptions}
      </div>
    </div>
  );
}
