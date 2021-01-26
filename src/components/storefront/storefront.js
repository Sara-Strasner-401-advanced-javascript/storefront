import React from 'react';
import Categories from './categories'
import Products from './products'
import './storefront.scss'

function Storefront(props) {
  console.log(props);
  return (
    <>
      <Categories />
      <Products />
    </>
  );
}
export default Storefront;
