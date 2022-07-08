import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { TableDataCustomers } from '../../components';
import { Table, Input, Button, Spinner } from 'reactstrap';
import { getCustomers } from '../../utils/CustomerHandler'; 

const DataCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [searchCustomer, setSearchCustomer]= useState('');
    const [isToken, setIsToken] = useState();


    useEffect(() => {
        getCustomers()
          .then(results => {
            // console.info('data : ', results.success)
            setIsToken(results.success);
            setCustomers(results.data);
         })
    }, [])

  return (
    <div className='container mt-5 py-5'>
      <div className='column'>
        <div className='col'>
            <h1>Table Data Customers</h1>
            <div className='col row my-4'>
                <div className='col-8 d-flex'>
                    <Input className='py-2'
                        type='text'
                        placeholder="Search Customer..."
                        onChange={event => setSearchCustomer(event.target.value)}
                    />
                    <Button className='btn btn-primary ms-2 py-2'>Search</Button>
                </div>
                <div className='col-4 d-flex justify-content-end'>
                    <Link to='/add-customer'><Button className='btn btn-success py-2'>Add Data</Button></Link>
                </div>
            </div>
        </div>
        {isToken === true ? (
            <div className='col'>
                <Table
                borderless
                bordered
                hover
                responsive
                size="md"
                >
                    <thead>
                        <tr>
                        <th>
                            No.
                        </th>
                        <th className='text-center'>
                            Name
                        </th>
                        <th className='text-center'>
                            Job Title
                        </th>
                        <th className='text-center'>
                            Adress
                        </th>
                        <th className='text-center'>
                            Country
                        </th>
                        <th>
                            Phone Number
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Action
                        </th>
                        </tr>
                    </thead>
                    {customers.filter(value => {
                        if(searchCustomer === "") {
                            return value;
                        } else if (value.name.toLowerCase().includes(searchCustomer.toLocaleLowerCase())) {
                            return value;
                        }
                    }).map((customer, index) => {
                        return (
                        <TableDataCustomers
                            key={customer.id}
                            no={index + 1}
                            name={customer.name}
                            job_title={customer.job_title}
                            address={customer.address}
                            country={customer.country}
                            number={customer.phone_number}
                            status={customer.status}
                            id={customer.id}
                        />
                        )
                    })}
            
                </Table>
            </div>
        ) : (
            <div className='d-flex row justify-content-center mt-5'>
                <Spinner>
                    Loading...
                </Spinner>
            </div>
        )}
        
      </div>
    </div>
  )
}

export default DataCustomers;
