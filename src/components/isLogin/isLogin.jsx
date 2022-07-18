import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login()
{
    const token = localStorage.getItem('token');
    const nav = useNavigate();
    useEffect( () => {
        token ? <></> : nav('/login')
     }, [token, nav] )
}

export default Login