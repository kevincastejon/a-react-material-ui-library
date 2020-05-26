import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
/**
 * A component example
 */
export default function MyComponent(props) {
  const {
    myProp,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        {myProp}
      </Button>
    </div>
  );
}

MyComponent.propTypes = {
  /** A random prop */
  myProp: PropTypes.string.isRequired,
};
MyComponent.defaultProps = {

};
