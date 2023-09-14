import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartmentsRequest } from '../redux/actions/departmentActions';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { updateDepartment } from '../redux/actions/chooseDepartmentAction';
import { fetchStudentRequest, fetchStudentsRequest } from '../redux/actions/studentActions';
import { updateStudentDepartment, updateStudentDepartmentAssign } from '../redux/actions/studentDeparatmentAction';
import { fetchStatusRequest, updateExamStatusRequest } from '../redux/actions/statusAction';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AssignDepartment() {
  const [choices, setChoices] = useState([]);

  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);
  const loading = useSelector((state) => state.departments.loading);
  const error = useSelector((state) => state.departments.error);
  const students = useSelector(state => state.students.students);
  const statuses = useSelector(state => state.status.status);
  const [examStatus, setExamStatus] = useState(false);
  const [alert, setAlert] = useState(false)
  const [conform,setConform] = useState(false)
  const [open, setOpen] = React.useState(false);
  const [openExam, setExamOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleExamClickOpen = () => {
    setExamOpen(true);
  };

  const handleExamClose = () => {
    setExamOpen(false);
  };
  // const dept = JSON.parse(students[0].choosen_department);

  useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    dispatch(fetchStudentsRequest());
  }, [choices]);

  useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    dispatch(fetchDepartmentsRequest());
    console.log(departments);
  }, []);

  useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    const re = dispatch(fetchStatusRequest());
    setExamStatus(statuses[0]?.exam)
    //  statuses[0].length > 0 && setExamStatus(statuses[0].exam)
  }, [examStatus]);

  const handleExamStatus = () => {

    dispatch(updateExamStatusRequest(1, !statuses[0].exam))
    dispatch(fetchStatusRequest());
    setExamStatus(statuses[0].exam)
    // handleExamClose();
  }
  console.log(students)
  const handleFormSubmit = () => {
    students.sort((a, b) => b.total_point - a.total_point);
    console.log(students.sort((a, b) => b.total_point - a.total_point))

    // Initialize department capacities
    const departmentCapacities = departments.map(dep => ({ department: dep.department, capacity: dep.intake }));
    console.log(departmentCapacities)
    // Assign students to departments based on their results and intake capacity
    students.forEach(student => {
      // Sort the student's choices based on the department capacity (in ascending order)
      console.log(student.choosen_department)
      const sortedChoices = JSON.parse(student.choosen_department);
      console.log(sortedChoices)

      // Assign the student to the first available choice that has capacity
      if(student.choosen_department){
      for (const choice of sortedChoices) {
        const department = departmentCapacities.find(dep => dep.department === choice);
        if (department && department.capacity > 0) {
          // Assign the student to the department
          dispatch(updateStudentDepartmentAssign(student.student_id, choice));
          // Reduce the capacity of the department
          console.log(choice)
          department.capacity--;
          break;
        }
        console.log(department)
      }
    }});

    console.log("Department assigned")
    handleClose();
  };


  return (
    <div className="container mt-5">
      {statuses[0]?.exam ? <Stack sx={{ width: '100%' }} spacing={2} >
        <Alert severity="success">
          <AlertTitle>Opened</AlertTitle>
          COC Exam is open For Student
        </Alert>
      </Stack> :     <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Closed</AlertTitle>
        Exam is Closed
      </Alert></Stack>}
      <Button variant="contained" color="success" onClick={handleExamClickOpen} style={{marginBottom: '2rem', marginTop: '1rem' }}>
        {statuses[0]?.exam ? 'HIDE EXAM' : 'VIEW EXAM'}
      </Button>
      
      <Button variant="contained" onClick={handleClickOpen} style={{marginTop: '10rem', marginLeft: '-7rem'}}>
        Assign Department
      </Button>

{open &&
  <div>
  <Button variant="outlined" onClick={handleClickOpen}>
    Open alert dialog
  </Button>
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Are you sure you want to assign department to students? 
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>No, Cancel</Button>
      <Button onClick={handleFormSubmit} autoFocus>
        Yes, Assign
      </Button>
    </DialogActions>
  </Dialog>
</div>
}

{openExam &&
  <div>
  <Button variant="outlined" onClick={handleClickOpen}>
    Open alert dialog
  </Button>
  <Dialog
    open={openExam}
    onClose={handleExamClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Are you sure! you want to open exam to students? 
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleExamClose}>Cancel</Button>
      <Button onClick={handleExamStatus} autoFocus>
      {statuses[0]?.exam ? 'HIDE EXAM' : 'VIEW EXAM'}
      </Button>
    </DialogActions>
  </Dialog>
</div>
}
    </div>
  );
}

