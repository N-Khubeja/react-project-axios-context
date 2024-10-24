import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

const $axios = axios.create({
    withCredentials:true,
    baseURL:API_URL
})

$axios.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${localStorage.getItem('token')}`
    return config
})

$axios.interceptors.response.use(
    (config) => config,
    async (err) => {
        const originalresponse = err.config
        if(err.response.status === 401 &&
            err.config &&
            !err.config._isRetry
        ){
            originalresponse._isRetry = true
            try {
                const response = await axios.get(`${API_URL}/refresh`,{
                    withCredentials:true
                })
                localStorage.setItem('token',response.data.accessToken)
                return $axios.request(originalresponse)
            } catch (error) {
                console.log('Unauthorized')
            }
        }
    }
)

export default $axios