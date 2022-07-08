import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {createCustomers} from '../../utils/CustomerHandler';

const CreateCustomer = () => {
  const [customerName, setCustomerName] = useState('');
  const [customerJob, setCustomerJob] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCountry, setCustomerCountry] = useState('');
  const [customerNumber, setCustomerNumber] = useState('');
  const [customerStatus, setCustomerStatus] = useState();

  const onSubmit = () => {
    const customer = {
      customerName,
      customerJob,
      customerAddress,
      customerCountry,
      customerNumber,
      customerStatus,
    }

    createCustomers(customer);

  }

  return (
    <div className='container mt-5 py-5'>
      <div className='col mb-4'>
          <h1>Create Customers</h1>
      </div>
      <div className='row'>
      <Form>
        <FormGroup>
          <Label>
            Customer Name
          </Label>
          <Input
            name="name"
            placeholder="Customer Name..."
            type="text"
            value={customerName}
            onChange={event => setCustomerName(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Job Title
          </Label>
          <Input
            name="job_title"
            placeholder="Job Title..."
            type="text"
            value={customerJob}
            onChange={event => setCustomerJob(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Address
          </Label>
          <Input
            name="address"
            placeholder="Address..."
            type="textarea"
            value={customerAddress}
            onChange={event => setCustomerAddress(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>
            Country
          </Label>
          <Input
            name="country"
            type="select"
            onChange={event => setCustomerCountry(event.target.value)}
            required
          >
            <option disabled selected>Country...</option>
            <option value='Indonesia' selected={customerCountry === 'Indonesia' ? true : false}>Indonesia</option>
            <option value='Singapore' selected={customerCountry === 'Singapore' ? true : false}>Singapore</option>
            <option value='Australia' selected={customerCountry === 'Australia' ? true : false}>Australia</option>
            <option value='India' selected={customerCountry === 'India' ? true : false}>India</option>
            <option value='Germany' selected={customerCountry === 'Germany' ? true : false}>Germany</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>
            Number
          </Label>
          <Input
            name="number"
            placeholder="Phone Number..."
            type="number"
            value={customerNumber}
            onChange={event => setCustomerNumber(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">
            Status
          </Label>
          <Input
            name="status"
            type="select"
            onChange={event => setCustomerStatus(event.target.value)}
            required
          >
            <option disabled selected>Choose Status...!</option>
            <option value='true' selected={customerStatus === true ? true : false}>Active</option>
            <option value='false' selected={customerStatus === false ? true : false}>Inactive</option>
          </Input>
        </FormGroup>
  
        <div className="d-flex justify-content-end">
          <Button
            color="success"
            className="mt-4 px-4 py-2"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </div>
      </Form>
      </div>
    </div>
  )
}

export default CreateCustomer;
