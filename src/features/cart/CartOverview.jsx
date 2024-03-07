import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCartTotalPrice, getCartTotalQuantity } from './cartSlice';

function CartOverview() {
  const numberOfPizzas = useSelector(getCartTotalQuantity);
  const totalPrice = useSelector(getCartTotalPrice);

  if (totalPrice === 0) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{numberOfPizzas} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
