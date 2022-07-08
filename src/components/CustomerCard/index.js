import React from 'react';
import './customer-card.css';
import IconPerson from '../../assets/images/img-person.jpg';
import { Table } from 'reactstrap';

const CustomerCard = (props) => {
    const  {name, job_title, address, country, number, status} = props;
  return (
    <div className='customer-card-wrapper'>
      <div className='img-customer-wrapper'>
        <img src={IconPerson} className='img-customer' alt="Customer_Image" />
      </div>
      <div className='customer-name row'>
        <h5>{name}</h5>
        <Table responsive>
            <tbody>
                <tr>
                    <td>
                        Job
                    </td>
                    <td>
                        : {job_title}
                    </td>
                </tr>
                <tr>
                    <td>
                        Address
                    </td>
                    <td>
                        : {address}
                    </td>
                </tr>
                <tr>
                    <td>
                        Country
                    </td>
                    <td>
                        : {country}
                    </td>
                </tr>
                <tr>
                    <td>
                        Number
                    </td>
                    <td>
                        : {number}
                    </td>
                </tr>
                <tr>
                    <td>
                        Status
                    </td>
                    <td className={status ? 'status-active' : 'status-inactive'}>
                        : {status ? 'Active' : 'Inactive'}
                    </td>
                </tr>
            </tbody>
        </Table>
      </div>
      {/* <div className='customer-contact row-cols-4'>
        <a href='#' className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-github'></i></a>
        <a href='#' className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-linkedin'></i></a>
        <a href='#' className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-whatsapp'></i></a>
        <a href='#' className='blue-icon size-icon' target='blank' rel='noreferrer'><i className='fa fa-instagram'></i></a>
      </div> */}
    </div>
  )
}

export default CustomerCard;
