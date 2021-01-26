// Shows a list of all categories
// State should contain a list of categories as well as the active category
// Each category should have a normalized name, display name, and a description
let initialState = {
  activeCategory:null,
  categoryList: [
    {
      name: 'unicorns',
      displayName: 'Unicorns',
      description: 'Magical AND cute!',
    },
    {
      name: 'narwhals',
      displayName: 'Narwhals',
      description: 'Beautiful undersea unicorns!',
    },
  ],
};

// Dispatches an action when one is clicked to “activate” it
// Create an action that will trigger the reducer to change the active category
// Update the active category in the reducer when this action is dispatched
export const setActiveCategory = name => {
  return {
    type: 'SWITCH',
    payload: name
  };
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'SWITCH':
      state.activeCategory = action.payload;
      console.log(state);
      return state;
      default:
        return state;
  }
};

