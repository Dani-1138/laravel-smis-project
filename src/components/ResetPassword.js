import { useState } from 'react';
import { useDispatch } from 'react-redux';
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

function ResetPassword() {
    const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const dispatch = useDispatch();

  const handleReset = () => {
    // Dispatch the loginUser action with user's credentials
    // dispatch(loginUser(user_id, password));
  };


  return (
    <MDBContainer style={{maxWidth: "30%", minWidth: "30%"}} className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Old Password' id='form1' type='text' value={oldPassword}  
        onChange={e => setOldPassword(e.target.value)}/>
      <MDBInput wrapperClass='mb-4' label='New Password' id='form2' type='password'
          value={newPassword}   onChange={e => setNewPassword(e.target.value)}/>


      <MDBBtn className="mb-4" onClick={handleReset}>Reset Password</MDBBtn>

      <div className="text-center">

      </div>

    </MDBContainer>
  );
}

export default ResetPassword;