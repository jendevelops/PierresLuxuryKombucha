import React from 'react';
import EmployeeLoginForm from './EmployeeLoginForm';

function LoggedIn(userName){
  return (
    <div class='wrapper'>
      <p>Hi {userName}! You've already logged in! Why don't you go check out our <a href="#/kegs">kegs</a>?</p>
    </div>
  );
}

function EmployeeLoginControl(props){
  let loginState = props.loginState;
  let userName = props.userName;
  let component = (<div>{loginState ? LoggedIn(userName) : <EmployeeLoginForm />}</div>);
  return component;
}

export default EmployeeLoginControl;