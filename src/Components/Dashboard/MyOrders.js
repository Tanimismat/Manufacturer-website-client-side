import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState();
    const [user] = useAuthState(auth);
    // const navigate = useNavigate()
    // console.log('User',user)
    console.log('Orders', orders)

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/orders?user=${user.email}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                // .then(res => {
                //     console.log('res', res);
                //     // if (res.status === 401 || res.status === 403) {
                //     //     navigate('/');
                //     // }
                //     // return res.json()
                //     res.json()
                // })
                .then(data => {
                    setOrders(data.data)
                })
        }
    }, [user]);

    const handleOrderDelete = _id => {
        const proceed = window.confirm('sure?')
        if (proceed) {
            console.log('deleting', _id)
            const url = `http://localhost:5000/order/${_id}`;
            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(orders => orders._id !== _id);
                        setOrders(remaining)
                    }
            })
        }
    }
    
    return (
        <div>
            {/* <p>my orders : {orders.length}</p> */}
            
            <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                        </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <tr
                                key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                <td>{order.product}</td>
                                <td>{order.quantity}</td>
                                <td><button onClick={()=>handleOrderDelete(order._id)} className="btn btn-xs">X</button></td>
                            </tr>)
                        }
                        
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default MyOrders;