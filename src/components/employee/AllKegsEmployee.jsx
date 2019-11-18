import React from 'react';
import EmployeeKeg from './EmployeeKeg';
import keggerinos from '../../data/Keggerinos';


// props needed: name, flavor, price, pintsLeft, key
function AllKegsEmployee(){
  return(
    <div>
      {keggerinos.map((keg, index) =>
        <EmployeeKeg 
          name={keg.name}
          flavor = {keg.flavor}
          price = {keg.price}
          pintsLeft = {keg.pintsLeft}
          key={index} />
      )};
    </div>
  );
}
export default AllKegsEmployee;