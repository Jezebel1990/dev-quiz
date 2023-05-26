/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from "@mui/system"
import Center from './Center'
import useForm from '../hooks/useForm';
import { ENDPOINTS, createAPIEndpoint } from '../api';
import  useStateContext  from '../hooks/useStateContext';
import { useNavigate } from 'react-router';


const getFreshModel= () => ({
  name: '',
  email: ''
})

export default function Login() {

    const { context, setContext, resetContext } = useStateContext();
    const navigate = useNavigate();

  const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
      } = useForm(getFreshModel);

useEffect(() => {

  return () => {

  }
}, [])




const login = e => {
  e.preventDefault();
  if (validate())
    createAPIEndpoint(ENDPOINTS.participant)
    .post(values)
    .then(res => {
        setContext({ participantId: res.data.participantId })
      navigate('/quiz')
    })
    .catch(err => console.log(err))
}

const validate = () => {
    let temp = {}
    temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "" : "Email inválido."
    temp.name = values.name !== "" ? "" : "Este campo é obrigatório."
    setErrors(temp)
    return Object.values(temp).every(x => x === "")
  }


return (
<Center>
    <Card sx={{ width: 400 }}>
        <CardContent sx={{ textAlign: 'center' }}>
      <Typography variant="h3" sx={{ my: 3 }}>
      Quiz Devs
      </Typography>
        <Box sx={{ 
   '& .MuiTextField-root': {
        m: 1,
        width: "90%"
    }
    }}> 

<form noValidate autoComplete='off' onSubmit={login}>
  <TextField 
    label= "Email"
    name="email"
    value={values.email}
    onChange={handleInputChange}
    variant="outlined"
    {...(errors.email && { error: true, helperText: errors.email })} 
    />
    
<TextField 
    label="Nome"
    name="name"
    value={values.name}
    onChange={handleInputChange}
    variant="outlined"
    {...(errors.name && { error: true, helperText: errors.name })}
    />
    
<Button
    type="submit"
    variant="contained"
    size="large"
    sx={{ width:"90%"}}>
    Começar</Button>
   </form>
   </Box>
    </CardContent>
    </Card>
  </Center>

  
  )
}

