import React from 'react';
import PatronKeg from './PatronKeg';
import keggerinos from '../../data/Keggerinos';

// props needed: name, flavor, price, pintsLeft, key
function AllKegsPatron() {
  return (
    <div>
      <h2>Kombucha On Tap</h2>
      {keggerinos.map((keg, index) =>
        <PatronKeg
          name={keg.name}
          flavor={keg.flavor}
          price={keg.price}
          pintsLeft={keg.pintsLeft}
          description={keg.description}
          key={index} />
      )};
    </div>
  );
}
export default AllKegsPatron;