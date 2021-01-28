import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart'
import { increaseInventory } from '../../store/products'


const mapDispatchToProps = { removeFromCart, increaseInventory };

function Cart(props) {
  console.log(props);
  console.log(`There are ${props.cart.length} items in the cart`);

  const handleClick = item => {
    console.log(`You want to remove ${item.name} from your cart`)
    props.removeFromCart(item.name)
    props.increaseInventory(item.name);
  }

  return (
    <>
      <div id="cartContent">
      {props.cart.length >= 1 ? props.cart.map((item, idx) => (
              <div key={idx}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <button onClick={() => handleClick(item)}>Remove from Cart</button>
              </div>
            ))
          : ''}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
