import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { IAuthComponent } from "../interface/context.interface";
import $axios from "../https";
import { Iuser } from "../interface/user.interface";

const AuthContext = createContext<IAuthComponent>({} as IAuthComponent)

export const AuthProvider = ({children} : {children:React.ReactNode}) => {
    const [user,setuser] = useState({} as Iuser)
    const [loading,setloading] = useState(true)

    useEffect(() => {
        $axios.get('/refresh')
        .then((res) => {
            setuser(res.data.user)
            setloading(false)
        })
        .catch((err) => {
            setloading(false)
            console.log(err)
        })
    })

    const logout = useCallback(() => {
        $axios.post('/logout')
        .then((res) => setuser({} as Iuser))
        .catch((err) => console.log(err))
    },[])


    return(
        <AuthContext.Provider value={{user,loading,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)