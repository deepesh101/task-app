import React, { useState } from 'react'
import { Grid, Typography, Dialog, DialogContent } from '@mui/material'
import { withStyles } from '@mui/styles'
import { CustomButtonComplete, CustomButtonDelete, StyledPaper } from './customComponents'

const styles = () => ({
    text: {
        color: '#003979'
    },
    taskPaper: {
        margin: '10px auto',
        padding: '10px 15px'
    },
    pointer: {
        cursor: 'pointer'
    }
})
const Task = props => {
    const { classes, task, index, deleteTask, markCompleted } = props
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    return (
        <StyledPaper elevation={1} className={classes.taskPaper}>
            <Grid container alignItems='center' justifyContent='space-between'>
                <Grid item onClick={handleOpen} className={classes.pointer}>
                    <Typography className={classes.text} variant='body1'>{index + 1}. {task.title ? task.title.split(100) + '...' : task.title}</Typography>
                </Grid>
                <Grid item>
                    <CustomButtonComplete variant='contained' onClick={() => markCompleted(index)} disabled={task.completed}>Completed</CustomButtonComplete>
                    <CustomButtonDelete variant='contained' onClick={() => deleteTask(index)}>Delete</CustomButtonDelete>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <Typography variant='h6'>{task.title}</Typography>
                    <Typography variant='body1'>{task.description}</Typography>
                    <Typography variant='body2'>{task.date ? `Added on ${task.date.toLocaleString('en')}` : ''}</Typography>
                </DialogContent>
            </Dialog>
        </StyledPaper>
    )
}

export default withStyles(styles)(Task);