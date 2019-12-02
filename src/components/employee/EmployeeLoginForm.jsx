import React from 'react';

function EmployeeLoginForm()
{
  return(
    <div class="wrapper">
      <div class='splash block'>
        <h1>Login</h1>
        <form action="#/employee/login">
          <tr>
            <th><label for="Email">Email</label></th>
            <th><input type="text" /></th>
          </tr>
          <tr>
            <th><label for="Password">Password</label></th>
            <th><input type='password' /></th>
          </tr>
          
          <button type='submit' class='btn btn-light right'>Login</button>
        </form>
      </div>
    </div>
  );
}


export default EmployeeLoginForm;