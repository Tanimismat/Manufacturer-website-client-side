import { useState, useEffect } from 'react';

const useTools = () => {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTools(data)
            });
    }, []);

    return [tools, setTools];
};

export default useTools;