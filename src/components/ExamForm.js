// import { useState } from "react";
// import { Link } from "react-router-dom"
// import Api from "./Api";
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchExamsRequest } from '../redux/actions/examAction';
// import { addExamRequest } from "../redux/actions/examAction";



// const ExamForm = ()=>{
//     const dispatch = useDispatch();
//     const [question, setQuestion] = useState('');
//     const [optionA, setOptionA] = useState('');
//     const [optionB, setOptionB] = useState('');
//     const [optionC, setOptionC] = useState('');
//     const [optionD, setOptionD] = useState('');
//     const [optionE, setOptionE] = useState('');
//     const [correct, setCorrect] = useState('');
//     const [year, setYear] = useState('');
//     const exams = useSelector(state => state.departments.exams);
//     const loading = useSelector(state => state.departments.loading);
//       const error = useSelector(state => state.departments.error);
    
//       const data = {
//         question:question,
//         optionA:optionA,
//         optionB:optionB,
//         optionC:optionC,
//         optionD:optionD,
//         optionE:optionE,
//         correct:correct,
//         year:year


//     }

//       const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addExamRequest(data));
//         console.log(data);
//       };

  
//     useEffect(() => {
//       // Dispatch the fetchStudentsRequest action when the component mounts
//       dispatch(fetchExamsRequest());
//       console.log(exams);
//     }, [dispatch]);
  
//     // if (loading) {
//     //   return <div>Loading...</div>;
//     // }

//     return(
//         <>
//             <div>
//                 <div className="container mt-5">
//                     <div className="row">
//                         <div className="col-md-12">
//                             <div className="card">
//                                 <div className="card-header">
//                                     <h4>Add Exam Question
//                                     <Link to="/view-student" className="btn btn-danger float-end">
//                                         Back
//                                     </Link>
//                                     </h4>
//                                 </div>
//                                 <div className="card-body">
//                                     <form onSubmit={handleSubmit}>
//                                         <div className="mb-3">
//                                             <label>Question</label>
//                                             <input type="text" name="question" className="form-control"
//                                             onChange={(e) => setQuestion(e.target.value)}/>
//                                         </div>
//                                         <div className="mb-3" style={{paddingLeft: "6rem"}}>
//                                             <label>Option A</label>
//                                             <input type="text"
//                                              name="optionA" 
//                                              className="form-control"
//                                              onChange={(e) => setOptionA(e.target.value)}/>
//                                         </div>
//                                         <div className="mb-3" style={{paddingLeft: "6rem"}}>
//                                             <label>Option B</label>
//                                             <input type="text" name="optionB" className="form-control"
                                            
//                                             onChange={(e) => setOptionB(e.target.value)}/>
//                                         </div>
//                                         <div className="mb-3" style={{paddingLeft: "6rem"}}>
//                                             <label>Option C</label>
//                                             <input type="text" name="optionC" className="form-control"
                                           
//                                             onChange={(e) => setOptionC(e.target.value)}/>
//                                         </div>
//                                         <div className="mb-3" style={{paddingLeft: "6rem"}}>
//                                             <label>Option D</label>
//                                             <input type="text" name="optionD" className="form-control"
                                           
//                                             onChange={(e) => setOptionD(e.target.value)}/>
//                                         </div>
//                                         <div className="mb-3" style={{paddingLeft: "6rem"}}>
//                                             <label>Option E</label>
//                                             <input type="text" name="optionE" className="form-control"
                                           
//                                             onChange={(e) => setOptionE(e.target.value)}/>
//                                         </div>
//                                         <div className="mb-3" style={{paddingLeft: "6rem"}}>
//                                             <label>Correct Answer</label><br />
//                                             <input type="text" name="answer" className="form-control"
                                        
//                                             onChange={(e) => setCorrect(e.target.value)}/>
//                                             {/* <select className="mb-3" style={{width: "50vw", height: "1.5rem"}}>
//                                               <option>A</option>
//                                               <option>B</option>
//                                               <option>C</option>
//                                               <option>D</option>
//                                             </select> */}
//                                         </div>
//                                         <div className="mb-3" style={{paddingLeft: "6rem"}}>
//                                             <label>Exam Year</label>
//                                             <input type="text" name="year" className="form-control"
                                           
//                                             onChange={(e) => setYear(e.target.value)}/>
//                                         </div>
                                       
//                                         <div>
//                                             <button type="submit"  className="btn btn-primary">Save Question</button>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ExamForm;


import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
    const filee =  await axios.post('http://localhost:8000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(filee)
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
    }
  };

  return (
    <div>
      <h1>Excel Upload</h1>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;
