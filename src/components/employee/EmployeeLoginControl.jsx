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
  let content= null;
  if(props.loginState){
    content=LoggedIn(props.userName);
  }
  else{
    content=<EmployeeLoginForm />;
  }
  return content;
}

export default EmployeeLoginControl;