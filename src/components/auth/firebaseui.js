import React, {useEffect} from 'react';
import { startFirebaseUI } from '../../config';
import 'firebaseui/dist/firebaseui.css';

const FirebaseUI = () => {
    useEffect(()=>{
        startFirebaseUI ('#firebaseui')
    },[])

    return (
        <div className="container">
             <div id="firebaseui"></div>     
        </div>
    )
};

export default FirebaseUI;