import React, { useState } from 'react';
import { makeStyles, Box, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createComplaintAction } from '../../store/Actions';
// import SnackBar from '../SnackBar/SnackBar';
import history from '../../Config/history';
const useStyles = makeStyles(theme => ({
  mainStyles: {
    width: '100%',
    height: '80vh',
    display: 'flex'
  },
  textStyles: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.palette.secondary.main
  },
  textFieldStyles: {
    width: '50%',
    backgroundColor: '#fff'
  },
  test: {
    width: '100%',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabledButton: {
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: '#C3C4C6',
    color: 'black',
    width: '10%'
  },
  enabledButton: {
    fontWeight: 'bold',
    fontSize: 15,
    backgroundColor: 'green',
    color: 'white',
    width: '10%'
  }
}));
const Note = props => {
  const classes = useStyles();
  const [note, setNote] = useState('');
  const dispatch = useDispatch();

  const addComplaint = () => {
    let prepareBody = {
      complaint: note
    };
    dispatch(createComplaintAction(prepareBody));
    setNote('');
  };
  const logout = () => {
    history.push('/auth/login');
    history.go();
  };
  return (
    <Box className={classes.mainStyles}>
      <Box className={classes.test}>
        <TextField
          className={classes.textFieldStyles}
          variant="outlined"
          margin="dense"
          label=""
          multiline
          disabled={props.isViewOnly}
          rows={4}
          value={note || ''}
          onChange={event => setNote(event.target.value)}
          inputProps={{
            maxLength: 200,
            height: 200
          }}
        />

        <Button
          className={
            note?.length < 5 ? classes.disabledButton : classes.enabledButton
          }
          disabled={note?.length < 5}
          onClick={addComplaint}
        >
          Add Note
          {/* {clicked && (
            <SnackBar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message="I love snacks"
              key={vertical + horizontal}
            />
          )} */}
        </Button>
      </Box>
      <Box style={{ width: '15%' }}>
        <Button
          onClick={logout}
          style={{
            marginTop: 20,
            marginRight: 50,
            backgroundColor: 'green',
            color: 'white',
            width: '100%'
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Note;
