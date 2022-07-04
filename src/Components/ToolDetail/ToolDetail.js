import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useTools from '../Hooks/useTools';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const ToolDetail = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    const [singleTool, setSingleTool] = useState()
    const { id } = useParams()
    const [tools] = useTools()
    
    useEffect(() => {
        const found = tools.find(item => item._id === id)
        found && setSingleTool(found)
    }, [tools, id]);
    return (
        <div>
            <h5>Tool detail: {id}</h5>
            <p>{ user?.displayName}</p>
            <p>{ user?.email}</p>
            <img className='' src={singleTool?.img} alt="tool" />
            <h6>{singleTool?.name}</h6>
            <h5>$ {singleTool?.price }</h5>
            <p>{singleTool?.description}</p>
        </div>
    );
};

export default ToolDetail;