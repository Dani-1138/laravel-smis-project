import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/roleAction'; 

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

function ResetPassword() {
    const [id, setId] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const users = useSelector(state=> state.user.users)
  const resetpass  = users.filter((user)=> user.user_id == id)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchUsersRequest())
  },[])
  const handleReset = () => {
   const  data = {
    user_id: resetpass[0].user_id,
    firstname: 'Daniel',
    middleName: resetpass[0].middleName,
    lastName: resetpass[0].lastName,
    email: resetpass[0].email,
    password: newPassword,
    role: resetpass[0].role
    }
  const res =  dispatch(updateUserRequest(id,data))
  console.log(res)
  };


  return (
    <MDBContainer style={{maxWidth: "30%", minWidth: "30%"}} className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='User Id' id='form1' type='text' 
        onChange={e => setId(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='New Password' id='form2' type='password'
          value={newPassword}   onChange={e => setNewPassword(e.target.value)}/>


      <MDBBtn className="mb-4" onClick={handleReset}>Reset Password</MDBBtn>

      <div className="text-center">

      </div>

    </MDBContainer>
  );
}

export default ResetPassword;