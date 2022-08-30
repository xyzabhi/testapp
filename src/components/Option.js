import "./option.css";
export default function Option(props) {
  return (
    <div
      className="option"
      onClick={() => {
        props.handler(props.idx);
      }}
    >
      <div className={`circle ${props.class}`}></div>
      <span>{props.option}</span>
    </div>
  );
}
