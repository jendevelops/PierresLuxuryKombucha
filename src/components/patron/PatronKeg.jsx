import React from 'react';

function PatronKeg(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.flavor} | ${props.price.toFixed(2)}</h6>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PatronKeg;