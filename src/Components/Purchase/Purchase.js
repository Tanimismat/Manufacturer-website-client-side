import React from 'react';
import Header from '../Shared/Header';
import ToolDetail from '../ToolDetail/ToolDetail';
import OrderPlacement from './OrderPlacement';

const Purchase = () => {
    return (
        <div>
            <Header></Header>
            <ToolDetail></ToolDetail>
            <OrderPlacement></OrderPlacement>
        </div>
    );
};

export default Purchase;