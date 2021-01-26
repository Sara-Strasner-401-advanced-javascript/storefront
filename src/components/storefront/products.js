import React from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/categories';
import { filterProducts } from '../../store/products';

const mapDispatchToProps = { setActiveCategory, filterProducts };

function Categories(props) {
  console.log('props in products', props);
  console.log('props.products', props.products.productList);

  return (
    <>
      <h1>Products</h1>
      <div id="categories">
        {props.products.productList
          ? 
          props.products.productList.map((product, idx) => (
              <div key={idx}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
              </div>
            ))
          : ''}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
