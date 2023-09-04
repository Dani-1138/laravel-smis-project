import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
//cp
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudentRequest, fetchStudentsRequest } from '../redux/actions/studentActions';
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { updateStudentRequest } from "../redux/actions/studentActions";
import UpdateStudent from "./updateSudent";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import DeleteConfirmation from "./DeleteModal";

function ViewStudentTable() {

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

  const dispatch = useDispatch();
  const students = useSelector(state => state.students.students);
  const loading = useSelector(state => state.students.loading);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [search,setSearch] = useState('');
  const userRole = useSelector(state => state.role.role);
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteId, setDeleteId] = useState('')
  const [effect,setEffect] = useState('')


  const navigate = useNavigate()
  const data = {
    student_id:id,
    firstName:firstName,
    middleName:middleName,
    lastName:lastName,
    email:email,
    password:password,
    sex:sex,
    age:age,
    phone:phone,
    entranceResult:entranceResult,
    cgpa:cgpa,
    cocResult:cocResult,
    department:department,
    batch:batch,
    status:status
}

useEffect(() => {
  // Dispatch the fetchStudentsRequest action when the component mounts
  dispatch(fetchStudentsRequest());
  dispatch(fetchStudentsRequest());
  dispatch(fetchStudentsRequest());
  dispatch(fetchStudentsRequest());
  dispatch(fetchStudentsRequest());
  console.log(students);
}, [dispatch]);

  const updateStudent = (e) => {
    e.preventDefault();
    dispatch(updateStudentRequest(id,data));
    console.log(data);
  };

  const updateId=(id)=>{
        
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseUpdate = () => setShowUpdate(false);
  const handleShowUpdate = () => {setShowUpdate(true)}
  const confirmModal =(id)=>{
   const res = dispatch(deleteStudentRequest(id));

  }
  const submitDelete = (id) => {
    const res = dispatch(deleteStudentRequest(id));
    console.log(id);
    setDisplayConfirmationModal(false);
    navigate('/add-student');
    navigate('/view-student')
  };
  useEffect(()=>{

  },[effect])
  const showDeleteModal = (id) => {
    setDeleteId(id)
    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // if (loading) {
  //   return <div>Loading...</div>
  // }
console.log(userRole);
 const filteredStudents = students.filter(student =>{
    if(userRole[0]?.role === 'admin'){
   return   student.firstName?.toLowerCase().includes(search.toLowerCase()) && (student.total_point > 50)
    }else{
    return  student.firstName?.toLowerCase().includes(search.toLowerCase())
    }
    }) 

    return (

    <div class="container ">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div class="row ">

          <div class="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" onChange={e => setSearch(e.target.value)} placeholder="Search Student" aria-label="Search" />

              </form>
            </div>
          </div>
          <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"rgb(157, 199, 201)"}}><h2><b>Students</b></h2></div>
          <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">

            <Button variant="primary" onClick={handleShow}>
              Add New Student
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="table-responsive " >
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>First Name </th>
                  <th>Middle Name</th>
                  <th>Last Name </th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { filteredStudents.length > 0 ? filteredStudents.map(student =>
                  <tr >
                    <td >{student.student_id}</td>
                    <td>{student.firstName}</td>
                    <td>{student.middleName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.age}</td>

                    <td>
                      <Link to={`/student-detail/${student.student_id}`} class="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}><i class="material-icons">&#xE417;</i></Link>
                      <Link to={`/update-student/${student.student_id}`} href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons" onClick={handleShowUpdate} >&#xE254;</i></Link>
                      
                      <Link class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i class="material-icons" onClick={() => showDeleteModal(student.student_id)}>&#xE872;</i></Link>
                      
                    </td>
                  </tr>) : <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>}
                  {/* <UpdateStudent showUpdate={showUpdate} 
                              handleShowUpdate={handleShowUpdate}
                              handleCloseUpdate={handleCloseUpdate}
                              studentId={student.student_id} /> */}
                
              </tbody>
            </table>
          </div>
        </div>

        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={updateStudent}>
                <div className="mb-3">
                  <label>Id</label>
                  <input type="text" name="id" className="form-control"
                    value={students.student_id}
                    onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>First Name</label>
                  <input type="text"
                    name="fname"
                    className="form-control"
                    onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Middle Name</label>
                  <input type="text" name="mname" className="form-control"

                    onChange={(e) => setMiddleName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Last Name</label>
                  <input type="text" name="lname" className="form-control"

                    onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" name="email" className="form-control"

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

                    onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Sex</label>
                  <input type="text" name="sex" className="form-control"

                    onChange={(e) => setSex(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Phone Number</label>
                  <input type="text" name="phone" className="form-control"

                    onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Batch</label>
                  <input type="text" name="batch" className="form-control"

                    onChange={(e) => setBatch(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Department</label>
                  <input type="text" name="dept" className="form-control"

                    onChange={(e) => setDepartment(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>COC Result</label>
                  <input type="text" name="coc" className="form-control"

                    onChange={(e) => setCocResult(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Entrace Result</label>
                  <input type="text" name="entrance" className="form-control"
                    onChange={(e) => setEntranceResult(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>CGPA</label>
                  <input type="text" name="gpa" className="form-control"
                    onChange={(e) => setCgpa(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Status</label>
                  <input type="text" name="status" className="form-control"

                    onChange={(e) => setStatus(e.target.value)} />
                </div>

                <button type="submit" class="btn btn-success mt-4">Add Record</button>
              </form>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

            </Modal.Footer>
          </Modal>

          {/* Model Box Finsihs */}
        </div>
      </div>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={deleteId} message={'Are you sure you want to delete this student?'}/>
    </div>
  );
}

export default ViewStudentTable;