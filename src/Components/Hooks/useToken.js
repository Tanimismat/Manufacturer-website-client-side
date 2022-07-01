import { useEffect } from "react";
import { useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        console.log('user inside useToken', user);
    }, [user]);
    return [token];
}

export default useToken;