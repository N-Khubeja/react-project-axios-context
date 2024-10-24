import { Button } from '@mui/material'
import React from 'react'
import $axios from '../https'

const Users = () => {
    const fetchusers = () => {
        $axios.get('/users')
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }

  return (
    <div>
        <Button onClick={fetchusers}>FETCH</Button>
    </div>
  )
}

export default Users