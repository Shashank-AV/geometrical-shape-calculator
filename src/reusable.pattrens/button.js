import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ConfirmButton = (props) => {
    
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color={props.color} onClick={props.onClick}>
        {props.label}
      </Button>
    </div>
  );
};

export default ConfirmButton;
