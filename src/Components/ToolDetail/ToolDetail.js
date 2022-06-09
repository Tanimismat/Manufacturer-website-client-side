import React from 'react';
import { useParams } from 'react-router-dom';

const ToolDetail = () => {
    const { purchaseId } = useParams()
    
    return (
        <div>
            <h5>Tool detail: { purchaseId}</h5>
        </div>
    );
};

export default ToolDetail;