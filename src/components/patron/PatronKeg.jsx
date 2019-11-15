import React from 'react';

function PatronKeg(props) {
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.flavor} | {props.price}</h6>
          <p class="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PatronKeg;