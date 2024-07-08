import React, { useContext } from "react";
import PropTypes from 'prop-types';
import './CSS/ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ShopCategory = (props) => {
  const { category, banner } = props;
  const { all_Product } = useContext(ShopContext);

  const filteredProducts = all_Product ? all_Product.filter(item => item.category === category) : [];

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          Showing 1-12 out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt="sort icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
};

ShopCategory.propTypes = {
  category: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired
};

export default ShopCategory;
