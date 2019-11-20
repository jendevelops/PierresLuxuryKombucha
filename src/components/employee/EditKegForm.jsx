import React from 'react';

function EditKegForm(props){
  return(
    <form action="#/employee">
      <p>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" value={props.name} />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input name="price" type="text" value={props.price}/>
      </p>
      <p>
        <label htmlFor="flavor">Flavor</label>
        <input name="flavor" type="text" value={props.flavor} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea rows="4" cols="50" name="price" value={props.price} />
      </p>
      <button type="submit">Save Edit</button> <a classFor="btn btn-primary">Cancel</a>
    </form>
  );
}

export default EditKegForm;