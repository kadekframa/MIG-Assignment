import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CustomerCard from '../../components/CustomerCard';
import {Input, Button, Spinner} from 'reactstrap';
import {getCustomers} from '../../utils/CustomerHandler'
import './customers.css'

const Customers = () => {
  const [customer, setCustomer] = useState([]);
  const [isToken, setIsToken] = useState();

  useEffect (() => {
    getCustomers()
          .then(results => {
        // console.info('data : ', results.data)
        setIsToken(results.success);
        setCustomer(results.data);
      })
  }, [])
  return (
    <div class="container list-customer-wrapper mt-5 py-5">
      <div className='column list-customer-bar'>
        <h1>List Customers</h1>
        <div className='col row my-4 mb-5'>
            <div className='col-8 d-flex'>
                <Input className='py-2' />
                <Button className='btn btn-primary ms-2 py-2'>Search</Button>
            </div>
            <div className='col-4 d-flex justify-content-end'>
                <Link to='/add-customer'><Button className='btn btn-success py-2'>Add Data</Button></Link>
            </div>
        </div>
      </div>
      {isToken === true ? (
        <div class="row">
        {customer.map(customer => {
          return (
            <div class="col-xxl-3 col-xl-4 col-sm-6  d-flex mb-auto">
              <CustomerCard
                key={customer.id}
                name={customer.name}
                job_title={customer.job_title}
                address={customer.address}
                country={customer.country}
                number={customer.phone_number}
                status={customer.status}
              />
            </div>
          )
        })}
      </div>
      ) : (
        <div className='d-flex row justify-content-center'>
            <Spinner>
                Loading...
            </Spinner>
        </div>
      )}
      
    </div>
  )
}

export default Customers;
