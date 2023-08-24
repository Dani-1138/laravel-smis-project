// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react";
// import { Button,Modal,Input } from 'react-bootstrap';
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStudentRequest, updateStudentRequest } from "../redux/actions/studentActions";

// const UpdateStudent=({showUpdate,handleShowUpdate,handleCloseUpdate,studentId})=>{

//     const [id, setId] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [middleName, setMiddleName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [sex, setSex] = useState('');
//     const [age, setAge] = useState(0);
//     const [phone, setPhone] = useState(0);
//     const [entranceResult, setEntranceResult] = useState(0);
//     const [cgpa, setCgpa] = useState(0);
//     const [cocResult, setCocResult] = useState(0);
//     const [department, setDepartment] = useState('');
//     const [batch, setBatch] = useState(0);
//     const [status, setStatus] = useState('');
//     const dispatch = useDispatch();
//     const students = useSelector(state => state.students.students);
//     const loading = useSelector(state => state.students.loading);

//     // useEffect(() => {
//     //   // Dispatch the fetchStudentsRequest action when the component mounts
//     //   dispatch(fetchStudentRequest(studentId));
//     //   console.log(students);
//     // }, []);
//     // const filteredStudents = students.filter(student =>
//     //   student.student_id.toLowerCase().includes(studentId.toLowerCase())
//     // );

//     const data = {
//         student_id:id,
//         firstName:firstName,
//         middleName:middleName,
//         lastName:lastName,
//         email:email,
//         password:password,
//         sex:sex,
//         age:age,
//         phone:phone,
//         entranceResult:entranceResult,
//         cgpa:cgpa,
//         cocResult:cocResult,
//         department:department,
//         batch:batch,
//         status:status
//     }
//     const updateStudent = (e) => {
//         e.preventDefault();
//         dispatch(updateStudentRequest(id,data));
//         console.log(data);
//       };
    
//     return(
// <div className="model_box">
// <Modal
//   show={showUpdate}
//   onHide={handleCloseUpdate}
//   backdrop="static"
//   keyboard={false}
// >
//   <Modal.Header closeButton>
//     <Modal.Title>Add Record</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <form onSubmit={updateStudent}>
//       <div className="mb-3">
//         <label>Id</label>
//         <input type="text" name="id" className="form-control"
//           value={students[1].student_id}
//           onChange={(e) => setId(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>First Name</label>
//         <input type="text"
//           name="fname"
//           className="form-control"
//           onChange={(e) => setFirstName(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Middle Name</label>
//         <input type="text" name="mname" className="form-control"

//           onChange={(e) => setMiddleName(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Last Name</label>
//         <input type="text" name="lname" className="form-control"

//           onChange={(e) => setLastName(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Email</label>
//         <input type="email" name="email" className="form-control"

//           onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Password</label>
//         <input type="text" name="password" className="form-control"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Age</label>
//         <input type="text" name="age" className="form-control"

//           onChange={(e) => setAge(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Sex</label>
//         <input type="text" name="sex" className="form-control"

//           onChange={(e) => setSex(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Phone Number</label>
//         <input type="text" name="phone" className="form-control"

//           onChange={(e) => setPhone(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Batch</label>
//         <input type="text" name="batch" className="form-control"

//           onChange={(e) => setBatch(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Department</label>
//         <input type="text" name="dept" className="form-control"

//           onChange={(e) => setDepartment(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>COC Result</label>
//         <input type="text" name="coc" className="form-control"

//           onChange={(e) => setCocResult(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Entrace Result</label>
//         <input type="text" name="entrance" className="form-control"
//           onChange={(e) => setEntranceResult(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>CGPA</label>
//         <input type="text" name="gpa" className="form-control"
//           onChange={(e) => setCgpa(e.target.value)} />
//       </div>
//       <div className="mb-3">
//         <label>Status</label>
//         <input type="text" name="status" className="form-control"

//           onChange={(e) => setStatus(e.target.value)} />
//       </div>

//       <button type="submit" class="btn btn-success mt-4">Add Record</button>
//     </form>
//   </Modal.Body>

//   <Modal.Footer>
//     <Button variant="secondary" onClick={handleCloseUpdate}>
//       Close
//     </Button>

//   </Modal.Footer>
// </Modal>

// {/* Model Box Finsihs */}
// </div>
// )}

// export default UpdateStudent;


import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Api from "./Api";
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentRequest, fetchStudentRequest, updateStudentRequest } from '../redux/actions/studentActions';
import './global.css'


const UpdateStudent = () => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState(0);
    const [entranceResult, setEntranceResult] = useState(0);
    const [cgpa, setCgpa] = useState(0);
    const [cocResult, setCocResult] = useState(0);
    const [department, setDepartment] = useState('');
    const [batch, setBatch] = useState(0);
    const [status, setStatus] = useState('');

    const [alert, setAlert] = useState(false)
    const { http } = Api();
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);
    const loading = useSelector(state => state.students.loading);
    const error = useSelector(state => state.students.error);

    const { student_id } = useParams();
    //     const filteredStudents = students.filter(student =>
    //   student.student_id.toLowerCase().includes(student_id.toLowerCase())
    // );
    const idd = student_id;
    useEffect(()=>{
      dispatch(fetchStudentRequest(student_id));
      setId(students[0].student_id)
      setStatus(students[0].status)
      setAge(students[0].age)
      setFirstName(students[0].firstName)
      setMiddleName(students[0].middleName)
      setLastName(students[0].lastName)
      setCocResult(students[0].cocResult)
      setDepartment(students[0].department)
      setCgpa(students[0].cgpa)
      setEmail(students[0].email)
      setPassword(students[0].password)
      setPhone(students[0].phone)
      setSex(students[0].sex)
      setBatch(students[0].batch)
      setEntranceResult(students[0].entranceResult)
    },[]);
    console.log(id);
    const data = {
        studentId: id,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        password: password,
        sex: sex,
        age: age,
        phone: phone,
        entranceResult: entranceResult,
        cgpa: cgpa,
        cocResult: cocResult,
        department: department,
        batch: batch,
        status: status
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      const response =  dispatch(updateStudentRequest(idd,data));
      console.log(response)
        if(response){
            // setAlert(true)
            // setTimeout(()=>setAlert(false),3000)
            // setFirstName('');
            // setMiddleName('');
            // setLastName('');
            // setDepartment('');
            // setCgpa('');
            // setPassword('');
            // setPhone('');
            // setEntranceResult('');
            // setEmail('');
            // setId('');
            // setSex('');
            // setStatus('');
            // setAge('');
            // setBatch('');
            // setCocResult('');
        }
    };
    

    return (
        <>
            <div>
                <div className="container mt-5">
                    {alert && <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                           Student Successfully Updeted
                        </Alert>
                    </Stack>}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add Student
                                        <Link to="/view-student" className="btn btn-danger float-end">
                                            Back
                                        </Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label>Id</label>
                                            <input type="text" name="id" className="form-control"
                                                value={id}
                                                onChange={(e) => setId(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>First Name</label>
                                            <input type="text"
                                                name="fname"
                                                className="form-control"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Middle Name</label>
                                            <input type="text" name="mname" className="form-control"
                                            value={middleName}
                                                onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Last Name</label>
                                            <input type="text" name="lname" className="form-control"
                                            value={lastName}
                                                onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input type="email" name="email" className="form-control"
                                            value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input type="text" name="password" className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Age</label>
                                            <input type="text" name="age" className="form-control"
                                            value={age}
                                                onChange={(e) => setAge(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Sex</label>
                                            <input type="text" name="sex" className="form-control"
                                            value={sex}
                                                onChange={(e) => setSex(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Phone Number</label>
                                            <input type="text" name="phone" className="form-control"
                                            value={phone}
                                                onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Batch</label>
                                            <input type="text" name="batch" className="form-control"
                                            value={batch}
                                                onChange={(e) => setBatch(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Department</label>
                                            <input type="text" name="dept" className="form-control"
                                            value={department}
                                                onChange={(e) => setDepartment(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>COC Result</label>
                                            <input type="text" name="coc" className="form-control"
                                            value={cocResult}
                                                onChange={(e) => setCocResult(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Entrace Result</label>
                                            <input type="text" name="entrance" className="form-control"
                                            value={entranceResult}
                                                onChange={(e) => setEntranceResult(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>CGPA</label>
                                            <input type="text" name="gpa" className="form-control"
                                            value={cgpa}
                                                onChange={(e) => setCgpa(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Status</label>
                                            <input type="text" name="status" className="form-control"
                                            value={status}
                                                onChange={(e) => setStatus(e.target.value)} />
                                        </div>
                                        <div>
                                            <button type="submit" className="btn btn-primary">Save Student</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateStudent;
