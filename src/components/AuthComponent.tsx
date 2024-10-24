import { Button, TextField, Typography } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import { Idata } from '../interface/Datainterface'

interface Iauthcomponent {
    type:string,
    action:(data:Idata) => void
}

const AuthComponent:React.FC<Iauthcomponent> = ({type,action}) => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const handle = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        action({email,password})
        setemail('')
        setpassword('')
    }

  return (
    <form onSubmit={handle} style={{width:'200px',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',margin:'20px auto'}}>
        <Typography>{type === 'login' ? 'login' : 'register'}</Typography>
        <TextField
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            fullWidth
            type='email'
            label='email'
            variant='outlined'
            style={{marginBottom:'20px'}}
        />
        <TextField
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
            fullWidth
            type='password'
            label='password'
            variant='outlined'
        />
        <Button type='submit'>{type === 'login' ? 'login' : 'register'}</Button>
    </form>
  )
}

export default AuthComponent