import React from 'react';
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import PrivateRoute from '../../Config/PrivateRoute';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  mobileMenuButton: {
    position: 'absolute',
    left: theme.spacing(2),
    color: '#0EA197'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.labelBackground,
    minHeight: '100vh',
    height: '100%',
    position: 'relative'
  },
  icon: {
    width: 32,
    height: 32
  }
}));
const AppLayout = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.routes.map((route, i) => (
        <PrivateRoute key={i} {...route} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, {})(AppLayout);
