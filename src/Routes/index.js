import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import MainApp from '../pages/MainApp';

const Routes = () => {
  return (
    <Router>
        <Switch>
            <Route path='*' element={<MainApp />} />
        </Switch>
    </Router>
  )
}

export default Routes;
