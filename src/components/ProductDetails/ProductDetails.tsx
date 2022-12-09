import { selectCurrentUser, setCart } from 'features/user/userSlice';
import { useReadByIdQuery } from 'features/products/productsApiSlice';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMaybeAddToCartMutation } from 'features/user/userApiSlice';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'hooks/preTyped';
import { IUser } from 'common/types/user.interface';
import { IProduct } from 'common/types/product.interface';
import { ICart } from 'common/types/cart.interface';
import { selectProductById } from 'features/products/productsSlice';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { productId } = useParams();
  const {
    data: product,
    isLoading: isQueryLoading,
    isError,
    isFetching,
  } = useReadByIdQuery(productId);
  const [count, setCount] = useState(1);
  const user: IUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const [addToCart, { isLoading }] = useMaybeAddToCartMutation();

  const handleAddToCart = async (): Promise<void> => {
    if (user) {
      try {
        const payload: ICart = await addToCart({
          userId: user.id,
          productId,
          quantity: count,
        }).unwrap();
        if (payload) {
          dispatch(setCart(payload));
          toast.success('Product added to cart');
        }
        navigate('/cart');
      } catch (err) {
        let message = 'No Server Response';
        if (err.status >= 400 && err.status < 500) {
          message = err.data?.message || 'Bad Request';
          toast.error(message);
        } else {
          toast.error(message);
        }
      }
    } else {
      navigate('/login', { state: { from: location }, replace: true });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countHandler = (action: string): void => {
    if (count < product.stock && action === 'add') setCount(count + 1);
    if (count > 1 && action === 'substract') setCount(count - 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = parseInt(e.target.value.replace(/\D/g, ''));
    if (value > 0 && value <= product.stock) {
      if (String(value) === '' || value === 0) value = 1;
      setCount(value);
    } else {
      setCount(1);
    }
  };

  return isQueryLoading || isFetching ? (
    <div className="d-flex justify-content-center align-items-center min-h-400px">
      <div className="spinner-border text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : isError ? (
    <section>
      <h2>Product not found!</h2>
    </section>
  ) : (
    <article className="row min-h-400px justify-content-center">
      <div className="col-12 col-md-10 col-xl-5 max-h-400px">
        <img
          className="img-rez rounded"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className="col-12 col-md-6 col-xl-4 m-4 m-xl-0">
        <div className="bg-light">
          <p className="border-bottom fs-3 fw-bold p-3">{product.name}</p>
          <p className="border-bottom pb-3 px-3">
            Price: ${product.discountedPrice.toFixed(2)}
          </p>
          <p className="pb-3 px-3">Description: {product.description}</p>
        </div>
      </div>

      <div className="col-11 col-sm-8 col-md-4 col-xl-3 m-4 m-xl-0">
        <div className="bg-white border shadow rounded">
          <div className="border-bottom">
            <p className="p-3 row mb-0">
              <span className="col-6">Price:</span>
              <span className="col-6">
                ${(product.discountedPrice * count).toFixed(2)}
              </span>
            </p>
          </div>
          <div className="border-bottom">
            <p className="p-3 row mb-0">
              <span className="col-6">Status:</span>
              <span className="col-6">
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>
          </div>
          <div className="border-bottom">
            <div className="p-3 mb-0">
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <div className="text-center">
                  <span className="text-green-5 fw-bold">Quantity:</span>
                </div>
                <div className="input-group justify-content-center border rounded">
                  <button
                    className="btn btn-white"
                    onClick={() => countHandler('substract')}
                  >
                    -
                  </button>
                  <input
                    className="form-control text-center border-0"
                    aria-label="item quantity"
                    value={count}
                    onChange={handleInput}
                  />
                  <button
                    className="btn btn-white"
                    onClick={() => countHandler('add')}
                  >
                    +
                  </button>
                </div>
                <div className="text-center">
                  <span className="text-muted">{product.stock} available</span>
                </div>
              </div>
            </div>
          </div>
          {/*TODO: Add loading icon */}
          <p className="p-3 text-center mb-0">
            <button
              className="btn btn-success w-75"
              type="button"
              onClick={handleAddToCart}
              disabled={isLoading ? true : false}
            >
              Add To Cart
            </button>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
