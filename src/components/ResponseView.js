import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotificationRequest, deleteNotificationRequest, fetchNotificationRequest } from "../redux/actions/notificationAction";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { deleteStudentRequest } from "../redux/actions/studentActions";
import DeleteConfirmation from "./DeleteModal";
import { Link, useNavigate } from "react-router-dom";
import { fetchComplainRequest, fetchComplainsRequest } from "../redux/actions/complainAction";

const ResponseView = () => {
    const dispatch = useDispatch();
    const complains = useSelector(state => state.complains.complains);
    const userRole = useSelector(state=> state.role.role)
    const resp = complains.filter(res => res.student_id == userRole[0].user_id)
    useEffect(()=>{
        dispatch(fetchComplainsRequest())
    },[])
  
  return (
    <div className="form-group">
       {resp.length > 0 ?  <div className="form-group">
               {resp.map(comp=><Stack>
       <Alert severity="error">
        <AlertTitle>Complain</AlertTitle>
        {comp.complain && comp.complain} — <strong>{comp.complain && comp.created_at}</strong>
      </Alert>
      </Stack>)}
       {resp.map(comp=><Stack>
       {comp.response ? <Alert severity="info">
        <AlertTitle>Response</AlertTitle>
        {comp.response && comp.response} — <strong>{comp.response && comp.created_at}</strong>
      </Alert> : <h1 style={{marginLeft: '200px', marginTop: '30px'}}> No response</h1>}
      </Stack>)}
      </div> : <h1 style={{marginLeft: '200px'}}>You have no Complain</h1>}
    </div>
  );
};

export default ResponseView;