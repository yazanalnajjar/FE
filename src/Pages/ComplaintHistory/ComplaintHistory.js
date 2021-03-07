import React, { useState } from 'react';
import {
  makeStyles,
  Card,
  Typography,
  FormControl,
  CardActions,
  MenuItem,
  CardContent,
  Button,
  Select,
  CardActionArea,
  Box
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllComplaintAction,
  modifyComplaintAction
} from '../../store/Actions';
import history from '../../Config/history';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    width: 'calc(100% * (1/3) - 10px - 1px)',
    margin: theme.spacing(3, 4)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  eachCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
}));

const NotesHistoryModal = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [status, setStatus] = useState({
    id: '',
    status: ''
  });

  const { data } = useSelector(state => state.complaintReducer);

  React.useEffect(() => {
    dispatch(getAllComplaintAction());
  }, []);

  const handleStateChange = (event, id) => {
    setStatus({ ...status, status: event.target.value, id: id });
  };
  const messages = Object.keys(data)?.length > 0 ? data : [];

  React.useEffect(() => {
    if (status?.id?.length > 0) {
      dispatch(
        modifyComplaintAction(status, () => {
          dispatch(getAllComplaintAction());
        })
      );
    }
  }, [status]);

  const logout = () => {
    history.push('/auth/login');
    history.go();
  };
  return (
    <Box>
      <Box
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <Button
          onClick={logout}
          style={{
            marginTop: 20,
            marginRight: 50,
            backgroundColor: 'green',
            color: 'white',
            width: '10%'
          }}
        >
          Logout
        </Button>
      </Box>
      <Box className={classes.eachCard}>
        {messages?.map((message, idx) => {
          return (
            <Card className={classes.root} key={idx}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Complaint
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {message.complaint}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <FormControl variant="standard" className={classes.formControl}>
                  <Select
                    defaultChecked={message.status || ''}
                    value={message?.status}
                    onChange={e => handleStateChange(e, message?._id)}
                  >
                    <MenuItem value={'pending'}>pending</MenuItem>
                    <MenuItem value={'InProgress'}>InProgress</MenuItem>
                    <MenuItem value={'completed'}>Completed</MenuItem>
                  </Select>
                </FormControl>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default NotesHistoryModal;
