import { TRootState } from 'app/store';
import { selectCurrentUser, setCart } from 'features/user/userSlice';
import {
  selectProductById,
  useListQuery,
} from 'features/products/productsApiSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useMaybeAddToCartMutation } from 'features/user/userApiSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  // @ts-ignore
  const { isLoading: isQueryLoading } = useListQuery();
  const { productId } = useParams();
  const [count, setCount] = useState(1);
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const [addToCart, { isLoading }] = useMaybeAddToCartMutation();

  const product = useSelector((state: TRootState) =>
    selectProductById(state, String(productId))
  );

  const handleAddToCart = async () => {
    if (user) {
      try {
        const payload = await addToCart({
          userId: user.id,
          productId,
          quantity: count,
        });
        // @ts-ignore
        dispatch(setCart(payload.data.cart));
        //navigate('/cart');
      } catch (err) {
        let message = 'No Server Response';
        if (err.status === 400) {
          message = err.data?.message || 'Bad Request';
          toast.error(message);
        } else {
          toast.error(message);
        }
      }
    } else {
      // TODO: Fix this!!! add navigate
      //navigate("/login")
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countHandler = (action) => {
    if (count < product.stock && action === 'add') {
      setCount(count + 1);
    }
    if (count > 1 && action === 'substract') {
      setCount(count - 1);
    }
  };

  const countInput = (value) => {
    if (value > 0 && value <= product.stock) {
      value.replace(/\D/g, '');
      if (value === '' || value === 0) value = 1;
      setCount(parseInt(value));
    } else {
      setCount(1);
    }
  };

  if (!product && !isQueryLoading) {
    return (
      <section>
        <h2>Product not found!</h2>
      </section>
    );
  }

  return isQueryLoading ? (
    <div className="d-flex justify-content-center align-items-center min-h-400px">
      <div className="spinner-border text-center" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
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
                    onChange={(e) => {
                      countInput(e.target.value);
                    }}
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
