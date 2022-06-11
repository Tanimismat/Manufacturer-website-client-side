import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import useTools from '../Hooks/useTools';

const ToolDetail = () => {
    const [singleTool, setSingleTool]=useState()
    const { purchaseId } = useParams()
    const [tools] = useTools()
    console.log(singleTool)
    
    useEffect(() => {
        const found = tools.find(item => item.id === purchaseId)
        // console.log(found)
        found && setSingleTool(found)
    }, [tools]);
    return (
        <div>
            <h5>Tool detail: { purchaseId }</h5>
            {/* <h5>Tools: {tools.length}</h5> */}
            {singleTool?.id}
            <img src={singleTool?.img} alt="tool" />
            <h6>{singleTool?.name}</h6>
            <h5>$ {singleTool?.price }</h5>
            <p>{singleTool?.description}</p>
        </div>
    );
};

export default ToolDetail;