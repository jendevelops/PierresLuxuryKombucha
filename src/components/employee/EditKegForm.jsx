import React from 'react';

function EditKegForm(props){
  return(
    <div className='wrapper'>
        <div className='splash'>
        <h1>Edit Keg</h1>
        <form action="#/employee">
          <tr>
            <th><label htmlFor="name">Name</label></th>
            <th><input name="name" type="text" value={props.name} /></th>
          </tr>
          <tr>
            <th><label htmlFor="price">Price</label></th>
            <th><input name="price" type="text" value={props.price} /></th>
          </tr>
          <tr>
            <th><label htmlFor="flavor">Flavor</label></th>
            <th><input name="flavor" type="text" value={props.flavor} /></th>
          </tr>
          <tr>
            <th><label htmlFor="description">Description</label></th>
            <th><textarea rows="4" cols="50" name="price" value={props.price} /></th>
          </tr>
          <button type="submit" className='btn btn-light'>Save Edit</button> <a className="btn btn-danger" href='#'>Cancel</a>
        </form>
      </div>
    </div>
  );
}

export default EditKegForm;