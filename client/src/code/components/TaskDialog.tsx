// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Imports ------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

// node modules
import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    // DialogContentText,
    DialogTitle,
    TextField,
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

// local imports
import { ITask } from "../Tasks";
import { ITaskList } from "../TaskLists";


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------ Styles ------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

const useStyles: any = makeStyles(() => ({
  root: {
  },
}));


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------- Component Definition ------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

// props and state types
type Props = {
  open: boolean,
  setOpen: (inVisible: boolean) => void,
  task: ITask,
  setTask: (inTask?: ITask) => void,
  submitTask: () => Promise<void>,
  taskLists: ITaskList[],
};

// actual component
const TaskDialog: React.FC<Props> = (props) => {
  
  const {
    open,
    setOpen,
    task,
    setTask,
    submitTask,
    taskLists,
  } = props;

  function handleClose(): void {
    setTask();
    setOpen(false);
  }

  function handleFormChange(event: any): void {
    const newTask: ITask = Object.assign(
      {}, 
      task,
      { [event.target.name]: event.target.value }
    );
    setTask(newTask);
  }

  function handleSubmit(): void {
    submitTask();
  }

  const classes = useStyles();

  return (

    <Dialog 
      open={open}
      aria-labelledby="form-dialog-title"
      fullWidth
      maxWidth="sm"
      className={classes.root}
    >

      <DialogTitle id="form-dialog-title">
        New Task
      </DialogTitle>

      <DialogContent>
        <form noValidate autoComplete="off">
          {/* title */}
          <TextField
            autoFocus
            required
            margin="dense"
            label="Title"
            fullWidth
            name="title"
            value={task.title}
            onChange={handleFormChange}
          />
          {/* task list */}
          <TextField
            select
            margin="dense"
            label="Task List"
            fullWidth
            name="taskList"
            value={task.taskList}
            onChange={handleFormChange}
          >
            {taskLists.map((inTaskList) => (
              <option key={inTaskList._id} value={inTaskList._id}>
                {inTaskList.title}
              </option>
            ))}
          </TextField>
          {/* description */}
          <TextField
            required
            margin="dense"
            label="Description"
            fullWidth
            name="description"
            value={task.description}
            onChange={handleFormChange}
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>

    </Dialog>

  );

};


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Exports ------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------

export default TaskDialog;


// --------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------- Fin --------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------------------