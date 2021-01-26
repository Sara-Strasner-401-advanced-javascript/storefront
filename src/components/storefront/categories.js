import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setActiveCategory } from '../../store/categories';
import { filterProducts } from '../../store/products';

const mapDispatchToProps = { setActiveCategory, filterProducts };

function Categories(props) {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = name => {
    props.setActiveCategory(name);
    props.filterProducts(name);
    setActiveCategory(name);
  };

  const loadCategories = () => {
    return props.categories.categoryList.map((category, idx) => (
      <div key={idx}>
        <h3>{category.displayName}</h3>
        <p>{category.description}</p>
        <button className='button' onClick={() => handleClick(category.name)}>
          View this Category
        </button>
      </div>
    ));
  };

  return (
    <>
      <div id="categories">
      <h1>Categories</h1>
        {!activeCategory ? loadCategories() : <h2>{activeCategory}</h2>}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
