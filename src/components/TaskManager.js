import React, { useState } from 'react'
import { Typography, Grid, TextField } from '@mui/material'
import { withStyles } from '@mui/styles'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { CustomButtonComplete, StyledPaper } from './customComponents'

const styles = () => ({
    header: {
        color: '#003979'
    },
    paper: {
        padding: '20px'
    }
})

const TaskManager = props => {
    const { classes, addTask } = props
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(null)
    const [error1, setError1] = useState(false)
    const [error2, setError2] = useState(false)
    const [error3, setError3] = useState(false)
    const handleSubmit = () => {
        if (task && description && date) {
            addTask({
                title: task,
                description,
                date,
                completed: false
            })
            setTask('')
            setDescription('')
            setDate(null)
        } else if (!task) {
            setError1(true)
        } else if (!description) {
            setError2(true)
        } else if (!date) {
            setError3(true)
        }
    }
    const removeError = () => {
        setError1(false)
        setError2(false)
        setError3(false)
    }

    return (
        <StyledPaper className={classes.paper}>
            <Grid container justifyContent='center' spacing={3}>
                <Grid item xs={12}>
                    <Typography style={{ fontWeight: 'bold' }} className={classes.header} variant='h5'>Task Manager</Typography>
                </Grid>
                <Grid item container spacing={2} direction='column' xs={12}>
                    <Grid item>
                        <TextField
                            type='text'
                            value={task}
                            onChange={e => {
                                setTask(e.target.value)
                                removeError()
                            }}
                            label='Task Title'
                            variant='outlined'
                            fullWidth
                            error={error1}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            type='text'
                            multiline
                            rows={3}
                            label='Task Description'
                            variant='outlined'
                            value={description}
                            onChange={e => {
                                setDescription(e.target.value)
                                removeError()
                            }}
                            fullWidth
                            error={error2}
                        />
                    </Grid>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label='Date'
                                value={date}
                                onChange={newValue => {
                                    setDate(newValue)
                                    removeError()
                                }}
                                renderInput={params => <TextField
                                    variant='outlined'
                                    fullWidth
                                    {...params}
                                    error={error3}
                                />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item>
                        <CustomButtonComplete variant='contained' className={classes.btn} onClick={handleSubmit}>Add Task</CustomButtonComplete>
                    </Grid>
                </Grid>
            </Grid>
        </StyledPaper>
    )
}

export default withStyles(styles)(TaskManager)
