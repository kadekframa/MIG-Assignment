import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Input, Button} from 'reactstrap';
import { getCustomers } from '../../utils/CustomerHandler';
import './dashboard.css'

const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
        getCustomers()
          .then(results => {
            console.info('data : ', results.data)
            setCustomers(results.data.length);
         })
    }, [])
  return (
    <div className='container mt-5 py-5'>
    <div className='column'>
      <div className='col dashboard-wrapper'>
          <h1>Dashboard</h1>
          <div className='row jumlah-wrapper mt-5'>
            <div className='col mx-2'>
                <h4 className='text-center text-success'>Jumlah Customer</h4>
                <h5 className='text-center mt-3'>{customers}</h5>
            </div>
            <div className='col mx-2'>
                <h4 className='text-center text-success'>Jumlah Customer Active</h4>
                <h5 className='text-center mt-3'>34</h5>
            </div>
            <div className='col mx-2'>
                <h4 className='text-center text-success'>Jumlah Customer Inactive</h4>
                <h5 className='text-center mt-3'>7</h5>
            </div>
          </div>
      </div>

      <div className='col mt-4 d-flex row'>
        <div className='col'></div>
        <div className='col'></div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard;
