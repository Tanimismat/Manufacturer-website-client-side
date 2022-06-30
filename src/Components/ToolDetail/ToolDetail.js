import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useTools from '../Hooks/useTools';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const ToolDetail = () => {
    const [user] =useAuthState(auth)
    const [singleTool, setSingleTool] = useState()
    const { id } = useParams()
    const [tools] = useTools()
    // console.log(tools)
    // console.log(id)
    
    useEffect(() => {
        const found = tools.find(item => item._id === id)
        // console.log(found)
        found && setSingleTool(found)
        // console.log(singleTool)
    }, [tools, id]);
    return (
        <div>
            <h5>Tool detail: {id}</h5>
            <p>{ user?.displayName}</p>
            <p>{ user?.email}</p>
            {/* <h5>Tools: {tools.length}</h5> */}
            {/* {singleTool?._id} */}
            <img className='' src={singleTool?.img} alt="tool" />
            <h6>{singleTool?.name}</h6>
            <h5>$ {singleTool?.price }</h5>
            <p>{singleTool?.description}</p>
        </div>
    );
};

export default ToolDetail;