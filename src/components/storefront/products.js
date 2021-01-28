import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/categories';
import {
  filterProducts,
  reduceInventory,
  get,
  deleteItem,
} from '../../store/products';
import { addToCart } from '../../store/cart';

const mapDispatchToProps = {
  setActiveCategory,
  filterProducts,
  addToCart,
  reduceInventory,
  get,
  deleteItem,
};

function Categories(props) {
  // console.log(`Here are the props.products: ${props.products}`);
  // console.log(`Here are the props: ${props}`);
  console.log(`Here are the props.products.results: ${props.products.results}`);

  const handleClick = product => {
    console.log(`You added ${product.name} to you cart`);
    props.addToCart(product);
    //props.reduceInventory(product.name);
  };
  const handleDelete = product => {
    props.deleteItem(product);
  };

  useEffect(() => {
    props.get();
  }, []);

  return (
    <>
      <div id="products">
        <h1>Products</h1>
        {props.products.results
          ? props.products.results.map((product, idx) => (
              <div key={idx}>
                <img alt={product.title} width="75px" src={product.image} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                  ${product.price} | {product.inventoryCount} in stock{' '}
                </p>
                <button
                  className="button"
                  onClick={() => handleDelete(product)}
                >
                  delete fron inventory
                </button>
                <button className="button" onClick={() => handleClick(product)}>
                  Add to Cart{' '}
                </button>{' '}
              </div>
            ))
          : ''}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
