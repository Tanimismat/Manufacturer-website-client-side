import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ConfirmationModal from './ConfirmationModal';

const MyOrders = () => {
    const [orders, setOrders] = useState();
console.log(orders)
    const [user] = useAuthState(auth);

    const [openModal, setOpenModal] = useState(false);

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
        // console.log('deleting', _id)
        const url = `http://localhost:5000/order/${_id}`;
        // console.log(url)
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
    
    
    return (
        <div>
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
                                <td>
                                    <label onClick={() => setOpenModal(true)} htmlFor="order-canceling-modal" className="btn modal-button">X</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                    
                </table>
                {openModal && <ConfirmationModal orders={orders} handleOrderDelete={handleOrderDelete} setOpenModal={setOpenModal} />}
                </div>
        </div>
    );
};

export default MyOrders;