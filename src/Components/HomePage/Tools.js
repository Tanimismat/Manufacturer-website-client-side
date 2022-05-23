import React, { useEffect, useState } from 'react';
import useTools from '../Hooks/useTools';
import Tool from '../HomePage/Tool';

const Tools = () => {

    const [tools, setTools] = useTools()

    // useEffect(() => {
    //     fetch('data.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setTools(data)
    //         })
    // }, []);

    return (
        <div className='tools'>
            {
                tools.map(tool => <Tool
                    key={tool.id}
                    tool={tool}
                ></Tool>)
            }
        </div>
    );
};

export default Tools;