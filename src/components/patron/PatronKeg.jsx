import React from 'react';

function importAll(r) {
  let images = {};
  r.keys().map((item) => { images[item.replace('../../', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));

function PatronKeg(props) {
  return (
    <div>
      <div className="card flex-row flex-wrap">
        <div className='card-header border-0'>
          <img src={images[props.img]} />
        </div>
        <div className="card-block">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.flavor} | ${props.price.toFixed(2)}</h6>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PatronKeg;