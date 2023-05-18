import React from 'react';
import { TextField} from '@mui/material'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'

function Login() {
  return (
    <Card sx={{ width: 400 }}>
        <CardContent>
        <Box sx={{ '& .MuiTextField-root': {
        m:1,
        with: '90%'
    }
    
    }}> 
   <form noValidate autoComplete='off'>
<TextField 
    label= "Email"
    name="email"
    variant="outlined"/>
<TextField 
    label="Nome"
    name="name"
    variant="outlined"/>
<Button
    type="submit"
    variant="contained"
    size="large"
    sx={{width:'90'}}
    >
    Começar</Button>
   </form>
   </Box>
        </CardContent>
    </Card>


  
  )
}

export default Login
