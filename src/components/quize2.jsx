import { useEffect, useState } from "react";
import { data } from "./data2";
import './quiz2.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchExamsRequest } from '../redux/actions/examAction';
export const Quizzz = () => {
  const [questions, setQuestions] = useState(data);
  const [total, setTotal] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const exams = useSelector(state => state.departments.exams);
  const loading = useSelector(state => state.departments.loading);
    const error = useSelector(state => state.departments.error);

  useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    dispatch(fetchExamsRequest());
    console.log(exams);
  }, []);

  const answers = ["q1-a", "q2-b", "q3-c", "q4-a", "q5-b"];

  const handleChange = ({ target }) => {
    const nextState = questions.map((question) => {
      if (question.name !== target.name) {
        return question;
      }

      return {
        ...question,
        options: question.options.map((opt) => {
          const checked = opt.radioValue === target.value;
          return {
            ...opt,
            selected: checked,
          };
        }),
        currentAnswer: target.value,
      };
    });
    setQuestions(nextState);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    let counter = 0;
    let flag = false;

    for (const [index, question] of questions.entries()) {
      if (!question.currentAnswer) {
        flag = true;
        alert("Por favor responde la pregunta #" + (index + 1));
        break;
      } else {
        if (question.currentAnswer === answers[index]) {
          ++counter;
        }
      }
    }

    if (!flag) {
      setTotal(counter);
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <>
        <h1>App Quiz</h1>
        <p>Responde las siguientes preguntas</p>
      </>
      <section>
        {submitted && (
          <div className="result">
            <h3>
              Obtuviste {total} de {answers.length} puntos
            </h3>
          </div>
        )}
        <form onSubmit={onSubmit}>
          {questions.map((question, idx) => (
            <div key={`group-${idx}`}>
              <h3>
                {idx + 1}. {question.question}
              </h3>
              {question.options.map((option, idx) => {
                return (
                  <div key={`option-${idx}`}>
                    <input
                      type="radio"
                      name={question.name}
                      value={option.radioValue}
                      checked={option.selected}
                      onChange={handleChange}
                    />
                    {option.choice}
                  </div>
                );
              })}
            </div>
          ))}
          <button className="sendInfo" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};
