import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentRequest, updateStudentRequest } from '../redux/actions/studentActions';
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
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.student);
    const loading = useSelector(state => state.students.loading);
    const error = useSelector(state => state.students.error);

    const { student_id } = useParams();
    //     const filteredStudents = students.filter(student =>
    //   student.student_id.toLowerCase().includes(student_id.toLowerCase())
    // );
    const idd = student_id;
    useEffect(()=>{
        dispatch(fetchStudentRequest(student_id));
        console.log(students)
      setId(students.student_id)
      setStatus(students.status)
      setAge(students.age)
      setFirstName(students.firstName)
      setMiddleName(students.middleName)
      setLastName(students.lastName)
      setCocResult(students.cocResult)
      setDepartment(students.department)
      setCgpa(students.cgpa)
      setEmail(students.email)
      setPassword(students.password)
      setPhone(students.phone)
      setSex(students.sex)
      setBatch(students.batch)
      setEntranceResult(students.entranceResult)
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
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
