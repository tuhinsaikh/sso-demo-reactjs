import React from 'react';
import Button from '@mui/material/Button'
import {useMsal} from '@azure/msal-react'

function Login() {
    const {instance} = useMsal();

    const handleLogin = () =>{
        instance.loginRedirect({
            scopes:['user.read']
        })
    }
    return ( 
        <div>
            <Button onClick={handleLogin} variant="outlined">Login</Button>
        </div>
    );
}

export default Login;