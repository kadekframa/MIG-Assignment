import React from 'react';
import {Routes as Switch, Route} from 'react-router-dom';
import {Home, Customers, DataCustomers, CreateCustomer, UpdateCustomer} from '..';
import { Footer, Navigation } from '../../components';
import './mainApp.css'

const MainApp = () => {
  return (
    <div className='main-app-wrapper'>
        <Navigation />
        <main className='content-route-wrapper'>
            <Switch>
                <Route exact path='/' element={<Home />} />
                <Route path='/customers' element={<Customers />} />
                <Route path='/customers-data' element={<DataCustomers />} />
                <Route path='/add-customer/' element={<CreateCustomer />} />
                <Route path='/edit-customer/:id' element={<UpdateCustomer />} />
            </Switch>
        </main>
        <Footer />
    </div>
  )
}

export default MainApp;
