import React from 'react';
import EmployeeLoginForm from './EmployeeLoginForm';

function LoggedIn(props){
  return (
    <div class='wrapper'>
      <p>Hi {props.userName}! You've already logged in! Why don't you go check out our <a href="#/kegs">kegs</a>?</p>
    </div>
  );
}

function EmployeeLoginControl(props){
  let content = <EmployeeLoginForm />;
  if(props.loginState){
    content=<LoggedIn userName={props.userName}/>;
  }
  return content;
}

export default EmployeeLoginControl;