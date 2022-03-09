import { Paper, Button, styled } from '@mui/material'

export const CustomButtonComplete = styled(Button)({
    backgroundColor: '#003979',
    textTransform: 'none',
    width: '100px',
    marginRight: '10px',
    '&:hover': {
        backgroundColor: '#003979e2'
    }
})

export const CustomButtonDelete = styled(Button)({
    backgroundColor: '#D60707',
    textTransform: 'none',
    width: '100px',
    '&:hover': {
        backgroundColor: '#D60707e2'
    }
})

export const CustomButtonCreate = styled(Button)({
    backgroundColor: '#003979',
    textTransform: 'none',
    width: 'auto',
    '&:hover': {
        backgroundColor: '#003979e2'
    }
})

export const StyledPaper = styled(Paper)({
    boxShadow: '3px 3px 10px 2px #00000022'
})