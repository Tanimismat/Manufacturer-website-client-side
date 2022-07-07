import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    // console.log('User',user)
    // console.log('Orders',orders)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?user=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
    }, [user]);

    return (
        <div>
            <p>my orders : {orders.length}</p>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                            </tr>)
                        }
                        
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default MyOrders;