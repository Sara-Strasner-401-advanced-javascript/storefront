import React from 'react';
import Categories from './categories'
import Products from './products'
import Admin from './admin'
import './storefront.scss'

function Storefront(props) {
  console.log(props);
  return (
    <>
      <Categories />
      <Products />
      <Admin />
    </>
  );
}
export default Storefront;
