/* eslint-disable import/no-anonymous-default-export */
//Displays a list of products associated with the selected category
// State should be a list of all products
// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products list based on the active category

// Each product should have a category association, name, description, price, inventory count

import superagent from 'superagent';

// const products = {
//   initialState: [],
//   productList: [
//     {
//       category: 'unicorns',
//       name: 'Pet Unicorn',
//       description: 'Fully house trained!',
//       price: '$99.99',
//       inventoryCount: 3,
//     },
//     {
//       category: 'unicorns',
//       name: 'Unicorn Snuggie',
//       description:
//         'Keep your unicorn warm and fashionable with this beautiful snuggie',
//       price: '$19.99',
//       inventoryCount: 30,
//     },
//     {
//       category: 'unicorns',
//       name: 'Unicorn Mane Brush',
//       description: 'Luscious locks will soon be yours',
//       price: '$9.99',
//       inventoryCount: 3,
//     },
//     {
//       category: 'narwhals',
//       name: 'Narwhal Fish Tank',
//       description:
//         'Keep your pet narwhal in this beautiful tank! Only requires 10,000 gallons of water',
//       price: '$99.99',
//       inventoryCount: 3,
//     },
//     {
//       category: 'narwhals',
//       name: 'Narwhal Patch',
//       description:
//         "Wear it with pride, so the whole world knows you're a #narwhalMom",
//       price: '$7.99',
//       inventoryCount: 30,
//     },
//     {
//       category: 'narwhals',
//       name: 'Narwhal Onesie',
//       description: "Won't your narwhal look cute in this?!",
//       price: '$9.99',
//       inventoryCount: 3,
//     },
//   ],
// };

let initialState = {
  results: [],
};

export const get = () => dispatch => {
  return superagent
    .get('https://fakestoreapi.com/products?limit=20')
    .then(response => {
      console.log(`Here is the response from superagent: ${response}`);
      dispatch(getAction(response.body));
    });
};
export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload,
  };
};

export const addItem = itemData => dispatch => {
  console.log(itemData);
  return superagent
    .post('https://fakestoreapi.com/products/')
    .send(itemData)
    .then(response => {
      dispatch(postAction(response.body));
    });
};
export const postAction = payload => {
  return {
    type: 'POST',
    payload: payload,
  };
};

export const deleteItem = product => dispatch => {
  return superagent
    .delete(`https://fakestoreapi.com/products/${product.id}`)
    .then(response => {
      dispatch(deleteAction(response.body));
    });
};
export const deleteAction = payload => {
  return {
    type: 'DELETE',
    payload: payload,
  };
};

export const filterProducts = name => {
  return {
    type: 'FILTER',
    payload: name,
  };
};

export const reduceInventory = productName => {
  return {
    type: 'REDUCE',
    payload: productName,
  };
};

export const increaseInventory = productName => {
  return {
    type: 'INCREASE',
    payload: productName,
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      return {
        results: payload,
      };
    case 'DELETE':
      console.log(`You just deleted:`, payload.title);
      let newState = state.results.filter(item => item.id !== payload.id);
      return { ...state, results: newState };
    case 'POST':
      console.log(`You just added:`, payload);
      let addedItemState = state.results.push(payload);
      return { ...state, results: addedItemState};


      //return { ...state, results:payload};
      //return { ...state, payload};
      //return { ...state, payload};
      // return {
      //   ...state,
      //   results: [...payload],
      // };
      //return {...state}

    // case 'FILTER':
    // let productList = productList.filter(
    //   item => item.category === payload
    // );
    // return { productList };
    // case 'REDUCE':
    //   let newCount = productList.map((item => {
    //     if (item.name === payload) {
    //       item.inventoryCount--;
    //       console.log(`${item.name} now has ${item.inventoryCount} in stock`);
    //     }
    //   }))
    //   return { ...state, newCount };
    //   case 'INCREASE':
    //   let updatedCount = productList.map((item => {
    //     if (item.name === payload) {
    //       item.inventoryCount++;
    //       console.log(`${item.name} now has ${item.inventoryCount} in stock`);
    //     }
    //   }))
    // return { ...state, updatedCount };
    default:
      return state;
  }
};
