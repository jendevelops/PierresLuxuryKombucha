import React from 'react';

function EmployeeKeg(props){
  return(
    <div>
      <div className="card col-4 inline">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.flavor} | {props.price}</h6>
          <p className="card-text">{props.pintsLeft}</p>
          <p className="card-text">{props.description}</p>
          <a href="#/keg/sell/{props.key}" className="btn btn-warning">Sell Pint</a>
          <a href="#/keg/edit/" className="btn btn-info">Edit Keg</a>
        </div>
      </div>
    </div>
  );
}

export default EmployeeKeg;