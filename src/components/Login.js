import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginUserRequest } from '../redux/actions/roleAction'; 
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
import { fetchUsersRequest } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [user_id, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertContent,setAlertContent] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector(state=> state.user.users)
  const userRole = useSelector(state => state.role.role);
  const isAuth = useSelector(state => state.role.isAuthenticated);

  const handleLogin = () => {
    if(user_id !== '' && password !== ''){
      const res =   dispatch(loginUserRequest(user_id, password));
      dispatch(loginUser(JSON.parse(localStorage.getItem('userRole'))));
      console.log(userRole)
      if(userRole[0]?.role){
    // dispatch(loginUser(userRole));
    if(userRole[0].role === 'student'){
      navigate('/stu-dashboard');
    }else{
      navigate('/dashboard');
    }
    }else{
      setAlert(true);
      setAlertContent('Please Insert Correct password');
    }
  
}else{
  setAlert(true);
  setAlertContent('Please Insert Id and Password');
}
}


  // Call the authentication logic when the app loads
useEffect(()=>{
  
  setTimeout(()=>{
    setAlert(false);
  },[10000])
}
,[alert])
  
  useEffect(()=>{
    dispatch(fetchUsersRequest());
  },[])

  return (
    <MDBContainer style={{maxWidth: "30%", minWidth: "30%"}} className="p-3 my-5 d-flex flex-column w-50">
    {alert && <Stack sx={{ width: '100%', marginBottom: '1rem' }} spacing={2}>
    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
       {alertContent}
    </Alert>
</Stack>}
      <MDBInput wrapperClass='mb-4' label='User Id' id='validationCustom01' type='text' value={user_id}  
        onChange={e => setUserId(e.target.value)} required />
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'
          value={password}   onChange={e => setPassword(e.target.value)} required />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={handleLogin}>Login</MDBBtn>

      <div className="text-center">

      </div>

    </MDBContainer>
  );
}

export default LoginForm;