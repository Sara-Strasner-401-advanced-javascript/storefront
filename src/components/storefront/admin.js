import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { get, deleteItem, addItem } from '../../store/products';

const mapDispatchToProps = {
  get,
  deleteItem,
  addItem
};

function Categories(props) {
  const [formData, setFormData] = useState({});

  const handleSubmit = e =>{
    e.preventDefault();
    e.target.reset();
    props.addItem(formData)
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]:e.target.value })
  }

  return (
    <div>
      <h2>Manage Inventory</h2>
      <form onSubmit={handleSubmit}>
        <h4>Add a new Item</h4>
        <input onChange={handleChange} type="text" name="title" placeholder="title"/>
        <input onChange={handleChange} type="text" name="description" placeholder="description"/>
        <input onChange={handleChange} type="text" name="category" placeholder="category"/>
        <input onChange={handleChange} type="text" name="price" placeholder="price"/>
        <input onChange={handleChange} type="text" name="image" placeholder="image"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
