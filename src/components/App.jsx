import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AllKegsEmployee from './employee/AllKegsEmployee';
import AllKegsPatron from './patron/AllKegsPatron';
import {NewKegControl} from './employee/NewKegControl';
import {EditKegControl} from './employee/EditKegControl';
import Header from './Header';
import splashPage from './SplashPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={splashPage} />
        <Route exact path='/patron' component={AllKegsPatron} />
        <Route exact path='/employee' component={AllKegsEmployee} />
        <Route path='/keg/new' component={NewKegControl}/>
        <Route path='/keg/edit/{id}' component={EditKegControl} />
      </Switch>
    </div>
  );
}

export default App;