import './App.css';
import TaskList from './components/TaskList';
import { Grid } from '@mui/material'
import { withStyles } from '@mui/styles'
import TaskManager from './components/TaskManager';
import { useState } from 'react';

const styles = () => ({
  root: {
    margin: '0px 30px',
    width: '80%'
  },
  mainGrid: {
    width: '100%'
  }
})

const App = props => {
  const { classes } = props
  const [tasks, setTasks] = useState([])
  const addTask = task => {
    setTasks(preVal => [...preVal, task])
  }
  const deleteTask = index => {
    const newTaskList = tasks.filter((t, i) => i !== index)
    setTasks(newTaskList)
  }
  const markCompleted = index => {
    const prevTasks = tasks
    prevTasks[index].completed = true
    console.log(prevTasks)
    setTasks(prevTasks)
  }

  return (
    <Grid container direction='column' spacing={10} className={classes.mainGrid} alignItems='center'>
      <Grid item>
        <TaskManager addTask={addTask} />
      </Grid>
      <Grid item className={classes.root}>
        <TaskList tasks={tasks} deleteTask={deleteTask} markCompleted={markCompleted} />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App);
