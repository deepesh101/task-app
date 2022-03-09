import React from 'react'
import { Typography, Grid } from '@mui/material'
import { withStyles } from '@mui/styles'
import Task from './Task'

const styles = () => ({
    header: {
        color: '#003979'
    }
})
const TaskList = props => {
    const { classes, tasks, deleteTask, markCompleted } = props
    return (
        <Grid>
            <Typography style={{ fontWeight: 'bold' }} className={classes.header} variant='h5'>Your Tasks</Typography>
            {tasks.map((task, index) => (
                <Task key={index} index={index} task={task} deleteTask={deleteTask} markCompleted={markCompleted} />
            ))}
        </Grid>
    )
}

export default withStyles(styles)(TaskList)