import { useState, useEffect } from 'react'
import { quiz } from './data'
import './quize.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchExamsRequest } from '../redux/actions/examAction';
import { fetchStudentRequest, updateCOCRequest, updateStudentRequest } from '../redux/actions/studentActions';
import { fetchStatusRequest } from '../redux/actions/statusAction';
import CountdownTimer from './Timer';

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [examStatus,setExamStatus] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
  const dispatch = useDispatch();
  const exams = useSelector(state => state.exams.exams);
  const loading = useSelector(state => state.exams.loading);
    const error = useSelector(state => state.exams.error);
  const students = useSelector(state => state.students.students);
 const users = useSelector(state=> state.user.role);
 const statuses = useSelector(state => state.status.status);
 const studentId = users ?  users[0]?.student_id : ''
  const handleSubmit =()=>{
    dispatch(updateCOCRequest(studentId,result.correctAnswers));
   
  }

  useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    const re = dispatch(fetchStatusRequest());
    console.log(statuses)
   
  }, []);
  useEffect(()=>{
    if (showResult){
      handleSubmit();
    }
  },[result.correctAnswers])
 
  //const studentId = "1138"

  useEffect(() => {
      // Dispatch the fetchStudentsRequest action when the component mounts
      dispatch(fetchStudentRequest(studentId));
      console.log(students);
  }, []);
  

  // const { questions } = quiz
  // const { question, choices, correctAnswer } = questions[activeQuestion]

    useEffect(() => {
      // Dispatch the fetchStudentsRequest action when the component mounts
      dispatch(fetchExamsRequest());
      console.log(exams);
    }, []);

  const initial = {
    question: '',
    optionA: '',
    optionB: '',
    optionC: '',
    optionD: '',
    correct: ''
  }
    let { question,optionA,optionB,optionC,optionD, correct } = exams[activeQuestion] || initial
    const choices = [optionA,optionB,optionC,optionD];
 


  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== exams.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
     
    }
  }

  const onClickPrev = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score - 1,
            correctAnswers: prev.correctAnswers - 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers -1 }
    )
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }



const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if(correct == "A"){
      correct = optionA;
    }else if(correct == "B"){
      correct = optionB;
    }else if(correct == "C"){
      correct = optionC;
    }else if(correct == "D"){
      correct = optionD;
    }
    if (answer === correct) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
}

useEffect(()=>{
  if(statuses.length > 0){
    setExamStatus(statuses[0].exam)
  }
},[statuses])



  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
   <div class="quize">
    
   {examStatus && 
   <div style={{flexDirection: 'column'}}>
   <CountdownTimer />
   <div className="quiz-container bg-white shadow">
      {!showResult && question.length > 0 ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(exams.length)}</span>
          </div>
          
          <h2>{question}</h2>
          <ul>
          {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
              
            ))}
          </ul>
          <div className="flex-right exam-btn">
          <button onClick={onClickPrev} disabled={selectedAnswerIndex === 0}>
              {/* {activeQuestion === exams.length - 1 ? 'Finish' : 'Prev'} */}
              Prev
            </button>
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === exams.length - 1 ? 'Finish' : 'Next'}
            </button>
            {/* <button onClick={handleSubmit}>Submit</button> */}
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Result</h3>
          <p>
            Total Question: <span>{exams.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div> </div>}
    {!examStatus && <h2>Exam Not Found</h2>}
   
    </div>
  )
}

export default Quiz