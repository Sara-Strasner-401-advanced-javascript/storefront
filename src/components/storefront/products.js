import React from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/categories';
import { filterProducts, reduceInventory } from '../../store/products';
import { addToCart } from '../../store/cart'

const mapDispatchToProps = { setActiveCategory, filterProducts, addToCart, reduceInventory };

function Categories(props) {

  const handleClick = (product) => {
    console.log(`You added ${product.name} to you cart`)
    props.addToCart(product);
    props.reduceInventory(product.name);
  }

  return (
    <>
      <div id="products">
        <h1>Products</h1>
        {props.products.productList
          ? props.products.productList.map((product, idx) => (
              <div key={idx}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price} | {product.inventoryCount} in stock </p>
                <button
                  className="button"
                  onClick={() => handleClick(product)}
                >
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
