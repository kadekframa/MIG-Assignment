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
          <div className='row jumlah-customer-wrapper mt-5 mx-3'>
            <div className='col all-customer row'>
              <div className='col icon-wrapper'>
                <h1 className='users-icon'><i className='fa fa-users text-grey'></i></h1>
              </div>
              <div className='col'>
                <h4 className='text-center text-success '>All of Customers</h4>
                <h4 className='text-center text-muted'>{customers}</h4>
              </div>
            </div>

            <div className='col all-customer row'>
              <div className='col icon-wrapper'>
                <h1 className='users-icon'><i className='fa fa-user-plus text-success'></i></h1>
              </div>
              <div className='col'>
                <h4 className='text-center text-success '>Active Customers</h4>
                <h4 className='text-center text-muted'>30</h4>
              </div>
            </div>

            <div className='col all-customer row'>
              <div className='col icon-wrapper'>
                <h1 className='users-icon'><i className='fa fa-user-times text-danger'></i></h1>
              </div>
              <div className='col'>
                <h4 className='text-center text-success '>Inactive Customers</h4>
                <h4 className='text-center text-muted'>13</h4>
              </div>
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
