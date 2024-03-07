import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from './cartSlice';

function Cart() {
  const { cart } = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        {cart.length > 0 ? `Your cart, ` : 'Please Add Some Pizza '}{' '}
        {user.username}
      </h2>
      {cart.length > 0 ? (
        <>
          <ul className="mt-3 divide-y divide-stone-200 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.key} />
            ))}
          </ul>
          <div className="mt-6 space-x-2">
            <Button to="/order/new" type="primary">
              Order pizzas
            </Button>

            <Button type="secondary" onClick={handleClearCart}>
              Clear cart
            </Button>
          </div>{' '}
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default Cart;
