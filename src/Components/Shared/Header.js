import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            
        </>
    );
};

export default Header;