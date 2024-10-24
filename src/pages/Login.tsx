import React from 'react'
import { Idata } from '../interface/Datainterface'
import AuthComponent from '../components/AuthComponent'
import $axios from '../https'

const Login:React.FC = () => {
  const action = (data:Idata) => {
    $axios.post('/login',{...data})
    .then((res) => localStorage.setItem('token',res.data.accessToken))
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <AuthComponent action={action} type='login'/>
    </div>
  )
}

export default Login