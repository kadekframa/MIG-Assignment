import React from 'react';
import {Link} from 'react-router-dom';
import './tableDataCustomers.css';
import { Button } from 'reactstrap';
import { deleteCustomers } from '../../utils/CustomerHandler';

const TableDataCustomers = (props) => {
  const  {no, name, job_title, address, country, number, status, id} = props;

  return (
    <tbody className='body-table'>
        <tr>
        <th className='text-center' scope="row">
            {no}.
        </th>
        <td>
            {name}
        </td>
        <td>
            {job_title}
        </td>
        <td>
            {address}
        </td>
        <td>
            {country}
        </td>
        <td>
            {number}
        </td>
        <td className={status ? 'status-active' : 'status-inactive'}>
            {status ? 'Active' : 'Inactive'}
        </td>
        <td>
            <span className='d-flex'>
                <Button color="danger" outline className='mx-1' onClick={() => deleteCustomers(id)}>
                    <i className='fa fa-trash' title='Delete Data'></i>
                </Button>
                <Link to={`/edit-customer/${id}`}>
                    <Button color="warning" outline className='mx-1' >
                        <i className='fa fa-pencil' title='Edit Data'></i>
                    </Button>
                </Link>
            </span>
        </td>
        </tr>
    </tbody>
  )
}

export default TableDataCustomers;
