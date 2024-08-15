import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [totalQuantity, setTotalQuantity] = React.useState(0);

  React.useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  }, [cartItems]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.name}>
          <h2>{plant.name}</h2>
          <img src={plant.imageUrl} alt={plant.name} />
          <p>{plant.description}</p>
          <p>Cost: ${plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
      <p>Total Items in Cart: {totalQuantity}</p>
    </div>
  );
};

export default ProductList;