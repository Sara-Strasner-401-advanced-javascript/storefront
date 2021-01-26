//Displays a list of products associated with the selected category
// State should be a list of all products
// Create an action that will trigger when the active category is changed
// HINT: Multiple reducers can respond to the same actions
// Create a reducer that will filter the products list based on the active category


// Each product should have a category association, name, description, price, inventory count
const products = {
  initialState:[],
  productList: [
    {
      category: 'unicorns',
      name: 'Pet Unicorn',
      description: 'Fully house trained!',
      price: '$99.99',
      inventoryCount:3
    },
    {
      category: 'unicorns',
      name: 'Unicorn Snuggie',
      description: 'Keep your unicorn warm and fashionable with this beautiful snuggie',
      price: '$19.99',
      inventoryCount:30
    },
    {
      category: 'unicorns',
      name: 'Unicorn Mane Brush',
      description: 'Luscious locks will soon be yours',
      price: '$9.99',
      inventoryCount:3
    },
    {
      category: 'narwhals',
      name: 'Narwhal Fish Tank',
      description: 'Keep your pet narwhal in this beautiful tank! Only requires 10,000 gallons of water',
      price: '$99.99',
      inventoryCount:3
    },
    {
      category: 'narwhals',
      name: 'Narwhal Patch',
      description: 'Wear it with pride, so the whole world knows you\'re a #narwhalMom',
      price: '$7.99',
      inventoryCount:30
    },
    {
      category: 'narwhals',
      name: 'Narwhal Onesie',
      description: 'Won\'t your narwhal look cute in this?!',
      price: '$9.99',
      inventoryCount:3
    },
  ],
};

export const filterProducts = name => {
  return {
    type: 'FILTER',
    payload: name
  };
};

export default (state = products.initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'FILTER':
      console.log('In the filtered function');
      let productList = products.productList.filter((item) => item.category === payload);
      return {productList};
            default:
        return state;
  }
};
