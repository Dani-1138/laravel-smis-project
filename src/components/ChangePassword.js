import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/roleAction'; 
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { fetchUsersRequest, updateUserRequest } from '../redux/actions/userAction';
import { ChangeRequest } from '../redux/actions/changePass';

function ChangePassword() {
    const [id, setId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [current, setCurrentPass] = useState('')
  const users = useSelector(state=> state.user.users)

  const change = useSelector(state=> state.change.isMatch)
  const userRole = useSelector(state=> state.role.role)
  const dispatch = useDispatch();
  const [pass,setPass] = useState(true)
  const [alert, setAlert] = useState(false)
//   const resetpass  = users.filter((user)=> user.user_id == id)
  useEffect(()=>{
    dispatch(fetchUsersRequest())
  },[])
  const handleReset = () => {
//    const  data = {
//     user_id: resetpass[0].user_id,
//     firstname: 'Daniel',
//     middleName: resetpass[0].middleName,
//     lastName: resetpass[0].lastName,
//     email: resetpass[0].email,
//     password: newPassword,
//     role: resetpass[0].role
//     }
  const res =  dispatch(ChangeRequest(userRole[0].user_id,current))
  if(change){
    setPass(false)
  }
  console.log(res)
  };
  const handleChange = () => {
       const  data = {
  
        password: newPassword,
        }
      const res =  dispatch(updateUserRequest(userRole[0].user_id,data))
        setAlert(true)
        setPass(false)
        setCurrentPass('')
        setNewPassword('')
      };


  return (
    <MDBContainer style={{maxWidth: "30%", minWidth: "30%"}} className="p-3 my-5 d-flex flex-column w-50">

      {pass && <MDBInput wrapperClass='mb-4' label='Current password' id='form1' type='text' 
        onChange={e => setCurrentPass(e.target.value)}/>}
      {change && <MDBInput wrapperClass='mb-4' label='New Password' id='form2' type='password'
          value={newPassword}   onChange={e => setNewPassword(e.target.value)}/>}

      {!change && <MDBBtn className="mb-4" onClick={handleReset}>Continue</MDBBtn>}
      {change && <MDBBtn className="mb-4" onClick={handleChange}>Change</MDBBtn>}
      {alert && <div className="text-center">
      <Stack sx={{ width: '100%' }} spacing={2}>
      {!change && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Please enter correct password — <strong>check it out!</strong>
      </Alert>}
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Password Successfully Changed
      </Alert>
    </Stack>
      </div>}

    </MDBContainer>
  );
}

export default ChangePassword;