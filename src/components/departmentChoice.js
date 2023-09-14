
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

export default function BasicSelect() {
  const [choices, setChoices] = useState([]);
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);
  const loading = useSelector((state) => state.departments.loading);
  const error = useSelector((state) => state.departments.error);
  const students = useSelector(state => state.students.students);
  const userRole = useSelector(state => state.role.role);
  const [alert, setAlert] = useState(false)
  
    useEffect(() => {
      // Dispatch the fetchStudentsRequest action when the component mounts
      dispatch(fetchStudentsRequest());
  }, []);

    useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    dispatch(fetchDepartmentsRequest());
    console.log(departments);
  }, []);

  const handleChange = (index, event) => {
    const selectedDept = event.target.value;
    const updatedChoices = [...choices];
    updatedChoices[index] = selectedDept;
    setChoices(updatedChoices);
  };

  const getAvailableDepartments = (index) => {
    const selectedDepts = choices.slice(0, index); // Get choices before current index
    return departments.filter((dep) => !selectedDepts.includes(dep.department));
  };

  const handleFormSubmit = () => {
    // You can process and save the selected choices in the database here.
    const newDepartment = choices;
    dispatch(updateDepartment(userRole[0].user_id, newDepartment));
    setAlert(true)
  };
  useEffect(()=>{

    setTimeout(()=>{
      setAlert(false);
    },[8000])
  }
  ,[alert])

// const dept = students.filter((student)=> student.student_id == userRole[0].user_id);
const dept = ''
console.log(dept)
  return (
    <div className="container mt-5">
      { departments && departments.map((selectedDept, index) => (
        <Box sx={{ minWidth: 120, maxWidth: 300, marginBottom: '50px' }} key={index}>
          <FormControl fullWidth>
            <InputLabel id={`demo-simple-select-label-${index}`}>{index + 1}th choice</InputLabel>
            <Select
              labelId={`demo-simple-select-label-${index}`}
              id={`demo-simple-select-${index}`}
              value={choices[index] || ''}
              onChange={(event) => handleChange(index, event)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {getAvailableDepartments(index).map((dep) => (
                <MenuItem key={dep.department} value={dep.department}>
                  {dep.department}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ))}
      {alert && <Stack sx={{ width: '100%', }} spacing={2} >
        <Alert severity="success">
          <AlertTitle>Sucess</AlertTitle>
          Department choice successfully
        </Alert>
      </Stack>}
      <Button variant="contained" onClick={handleFormSubmit}>
        Submit
      </Button>

      <div class="row">
          <div class="table-responsive " >
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Department </th>
                </tr>
              </thead>
              <tbody>
                {dept.length > 0 && dept.map((depts,i)=>
                  <tr>
                    <td>{i+1}</td>
                    <td>{depts}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
          </div>
    </div>
  );
}

