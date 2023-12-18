import React from 'react';
import Button from '@mui/material/Button'
import { useMsal } from '@azure/msal-react';

function Logout() {
    const {instance} = useMsal();

    const handlelogout = () =>{
        instance.logoutRedirect();
    }
    return ( 
        <div>
            <Button onClick={handlelogout} variant="outlined">Logout</Button>
        </div>
     );
}

export default Logout;