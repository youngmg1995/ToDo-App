// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Imports ------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

// node modules
import React from "react";
import {
  Checkbox,
  Tooltip,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// local imports


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------ Styles ------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

const useStyles: any = makeStyles(() => ({
  root: {
  },
  selectButton: {
    width: 28,
    height: 40,
    borderRadius: 2,
    padding: 0,
  },
  dropDownButton: {
    position: "relative",
    left: -4,
    width: 20,
    height: 40,
    borderRadius: 2,
    padding: 0,
  },
}));


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------- Component Definition ------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

// props and state types
type Props = {
};

// actual component
const TasksSelectButton: React.FC<Props> = (props) => {
  
  const { 
  } = props;

  const classes = useStyles();

  return (

    <Tooltip title="Select">
      <div className={classes.root}>

        {/* Select Checkbox */}
        <Checkbox 
          size="small"
          classes={{root: classes.selectButton}}
        />

        {/* Select Dropdown */}
        <Checkbox 
          checked={false}
          size="small"
          icon={<ArrowDropDownIcon />}
          classes={{root: classes.dropDownButton}}
        />

      </div>
    </Tooltip>

  );
};


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Exports ------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

export default TasksSelectButton;


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------- Fin --------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------