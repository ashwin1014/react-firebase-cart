import React, { useState } from 'react';
import { Typography, Button } from 'antd';

import EmailLogin from './emailLogin';
import FirebaseUI from './firebaseui';

const { Title } = Typography;


const SignIn = () => {
    const [LoginType, setLoginType] = useState('otp');

    const handleLoginType = e => {
        setLoginType(e.target.dataset.type)
    };

    if(LoginType === 'otp') {
        return (
            <>
               <Title level={2} className="center">Sign In</Title>
               <FirebaseUI/>
               <br/>
               <div className="container center">     
                <Button type="link" data-type="email" onClick={handleLoginType}>Login Via Email insted?</Button>          
               </div>
            </>
        ) 
    } else {
            return (
              <>
                <Title level={2} className="center">Sign In</Title>
                <EmailLogin/>
                <div className="center container">                    
                 <Button type="link" data-type="otp" onClick={handleLoginType}>Login Via OTP insted?</Button>  
                </div>
              </>
            )
        }
}

export default SignIn;