import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AuthButtons:React.FC = () => {
    const navigate = useNavigate()
  return (
    <div style={{display:'flex', backgroundColor:'white'}}>
        <Button onClick={() => navigate('/login')}>LOGIN</Button>
        <Button onClick={() => navigate('/register')}>REGISTER</Button>
    </div>
  )
}

export default AuthButtons