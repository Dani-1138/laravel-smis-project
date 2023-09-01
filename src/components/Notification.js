import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotificationRequest, fetchNotificationRequest } from "../redux/actions/notificationAction";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Notification = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [alert,setAlert] = useState(false);
    const dispatch = useDispatch();
    const [response,setRespose] = useState({msg: '', status: 0})
    const notifications = useSelector(state => state.notification.notification);
    const handleOnSubmit =()=>{
        const data = {
            title: title,
            description: description
        }
        const res = dispatch(addNotificationRequest(data));
        setDescription('');
        setTitle('')

        setAlert(true);
    }
    useEffect(()=>{
        setTimeout(()=>{
            setAlert(false)
        },[6000]);
    },[alert]);
    useEffect(()=>{
        dispatch(fetchNotificationRequest());
    },[alert])
    console.log(notifications);
  return (
    <div className="form-group">
        {alert && <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
         successfully posted
      </Alert>
    </Stack>}
        <div className="ml-3">
            <label>Notification title</label>
            <input type="text" name="id" className="form-control" style={{width: 500}}
                onChange={(e) => setTitle(e.target.value)} 
                />
        </div>
      <label htmlFor="exampleFormControlTextarea1" className="m-3">Notification detail</label>
      <textarea
        className="form-control ml-3"
        id="exampleFormControlTextarea1"
        rows="5"
        style={{width: 500, marginLeft: 50}}
        onChange={e => setDescription(e.target.value)}
      />
      <div>
        <button type="submit" className="btn btn-primary m-3" onClick={handleOnSubmit}>Submit</button>
       </div>
       {notifications.map(notify=><Stack>
       <Alert severity="info">
       <a class="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i class="material-icons">&#xE872;</i></a>
        <AlertTitle>{notify.title}</AlertTitle>
        {notify.description} — <strong>{notify.created_at}</strong>
      </Alert>
      </Stack>)}
    </div>
  );
};

export default Notification;