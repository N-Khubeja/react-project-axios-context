import React from 'react'
import { Idata } from '../interface/Datainterface'
import AuthComponent from '../components/AuthComponent'
import $axios from '../https'

const Register:React.FC = () => {
  const action = async (data:Idata) => {
    try {
      const res = await $axios.post('/registration',{...data})
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <AuthComponent action={action} type='register'/>
    </div>
  )
}

export default Register