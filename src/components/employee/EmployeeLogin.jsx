import React from 'react';

function EmployeeLogin()
{
  return(
    <div className="wrapper">
      <div className='splash block'>
        <h1>Login</h1>
        <form action="#">
          <tr>
            <th><label htmlFor="Email">Email</label></th>
            <th><input type="text" /></th>
          </tr>
          <tr>
            <th><label htmlFor="Password">Password</label></th>
            <th><input type='password' /></th>
          </tr>
          
          <button type='submit' className='btn btn-light right'>Login</button>
        </form>
      </div>
    </div>
  );
}


export default EmployeeLogin;