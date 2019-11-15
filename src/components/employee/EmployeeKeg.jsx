import React from 'react';

function EmployeeKeg(props){
  return(
    <div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.flavor} | {props.price}</h6>
          <p class="card-text">{props.pintsLeft}</p>
          <p class="card-text">{props.description}</p>
          <a href="/keg/sell/{props.key}" class="btn btn-warning">Sell Pint</a>
          <a href="/keg/edit/{props.key}" class="btn btn-info">Edit Keg</a>
        </div>
      </div>
    </div>
  );
}

export default EmployeeKeg;