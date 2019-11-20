import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AllKegsEmployee from './employee/AllKegsEmployee';
import AllKegsPatron from './patron/AllKegsPatron';
import {NewKegControl} from './employee/NewKegControl';
import EditKegControl from './employee/EditKegControl';
import Header from './Header';
import splashPage from './SplashPage';
import EmployeeLogin from './employee/EmployeeLogin';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={splashPage} />
        <Route exact path='/menu' component={AllKegsPatron} />
        <Route exact path='/employee' component={AllKegsEmployee} />
        <Route exact path='/employee/login' component={EmployeeLogin} />
        <Route path='/keg/new' component={NewKegControl}/>
        <Route path='/keg/edit/' component={EditKegControl} />
      </Switch>
    </div>
  );
}

export default App;