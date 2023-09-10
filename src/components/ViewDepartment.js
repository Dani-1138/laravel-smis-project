import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { Button,Modal,Input } from 'react-bootstrap';
import "./global.css"
//cp
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDepartmentRequest, fetchDepartmentsRequest } from '../redux/actions/departmentActions';
import { addDepartmentRequest } from "../redux/actions/departmentActions";
import { Avatar, Skeleton } from "@mui/material";
//
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from "react-router-dom";
import DeleteConfirmation from "./DeleteModal";

const Image = styled('img')({
  width: '100%',
});

function SkeletonChildrenDemo() {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ margin: 1 }}>
            <Skeleton variant="circular">
              <Avatar />
            </Skeleton>
        </Box>
        <Box sx={{ width: '100%' }}>
          
            <Skeleton width="100%">
              <Typography>.</Typography>
            </Skeleton>
        </Box>
      </Box>
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
    </div>
  );
}
 
function ViewDepartmentTable() {

    const dispatch = useDispatch();
    const [department, setDepartment] = useState('');
    const [intake, setIntake] = useState(0);
    const [status, setStatus] = useState('');
    const departments = useSelector(state => state.departments.departments);
    const loading = useSelector(state => state.departments.loading);
    const [show, setShow] = useState(false);
      const error = useSelector(state => state.departments.error);
      const [alert, setAlert] = useState(false)
      const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
      const [deleteId, setDeleteId] = useState('')
       const [effect,setEffect] = useState('')
       const [search,setSearch] = useState('');

    const navigate = useNavigate()
    const submitDelete = (id) => {
      const res = dispatch(deleteDepartmentRequest(id));
      console.log(id);
      setDisplayConfirmationModal(false);
      navigate('/exam');
      navigate('/department')
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
    const data = {
      department:department,
      intake:intake,
      status:status,

  } 
      const handleSubmit = (e) => {
        e.preventDefault();
       const response =  dispatch(addDepartmentRequest(data));
        if(response){
          setShow(false)
          setAlert(true)
          setTimeout(()=>setAlert(false),3000)
        }
      };

 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    useEffect(() => {
      // Dispatch the fetchStudentsRequest action when the component mounts
      dispatch(fetchDepartmentsRequest());
    }, []);
  
    if (loading) {
      return     <Grid container spacing={8}>
      <Grid item xs>
        <SkeletonChildrenDemo />
      </Grid>
      <Grid item xs>
        <SkeletonChildrenDemo />
      </Grid>
    </Grid>  
    }
    const filteredDepartments = departments.filter(department =>{

      return  department.department?.toLowerCase().includes(search.toLowerCase())
      }) 
  return (
 
       <div class="container ">
        {alert && <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                           Department Successfully Add
                        </Alert>
                    </Stack>}
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" onChange={e => setSearch(e.target.value)} placeholder="Search department" aria-label="Search"/>
                
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"rgb(157, 199, 201)"}}><h2><b>Departments</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add Department
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead >
                        <tr>
                            <th style={{backgroundColor:"rgb(157, 199, 201)"}}>#</th>
                            <th style={{backgroundColor:"rgb(157, 199, 201)"}}>Department </th>
                            <th style={{backgroundColor:"rgb(157, 199, 201)"}}>Intake Capacity</th>
                            <th style={{backgroundColor:"rgb(157, 199, 201)"}}>status</th>
                            <th style={{backgroundColor:"rgb(157, 199, 201)"}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                {filteredDepartments &&  filteredDepartments.map((dep,index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{dep.department}</td>
                            <td>{dep.intake}</td>
                            <td>{dep.status}</td>
                            <td>
                                <Link to={`/update-department/${dep.id}`} href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></Link>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons" onClick={() => showDeleteModal(dep.id)}>&#xE872;</i></a>
                                 
                            </td>
                        </tr>))
                        }

 
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
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <input type="text" class="form-control" id="exampleInputEmail1" onChange={e => setDepartment(e.target.value)} aria-describedby="textHelp" placeholder="Enter Department"/>
                </div>
                <div class="form-group mt-3">
                    <input type="number" class="form-control" id="exampleInputEmail1" onChange={e => setIntake(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Intake Capacity"/>
                </div>
                <div class="form-group mt-3">
                    <input type="text" class="form-control" id="exampleInputEmail1" onChange={e => setStatus(e.target.value)} aria-describedby="emailHelp" placeholder="Enter Student Satisfaction"/>
                </div>
                
                  <button type="submit" class="btn btn-success mt-4">Add Department</button>
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
 
export default ViewDepartmentTable;

