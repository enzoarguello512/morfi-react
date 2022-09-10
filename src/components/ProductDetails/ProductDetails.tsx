import { TRootState } from 'app/store';
import {
  selectProductById,
  useListQuery,
} from 'features/products/productsApiSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // @ts-ignore
  const { isLoading } = useListQuery();
  const { productId } = useParams();
  let [count, setCount] = useState(0);

  const product = useSelector((state: TRootState) =>
    selectProductById(state, String(productId))
  );

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
      setCount(0);
    }
  };

  if (!product && !isLoading) {
    return (
      <section>
        <h2>Product not found!</h2>
      </section>
    );
  }

  return isLoading ? (
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
            Price: ${product.discountedPrice}
          </p>
          <p className="pb-3 px-3">Description: {product.description}</p>
        </div>
      </div>

      <div className="col-11 col-sm-8 col-md-4 col-xl-3 m-4 m-xl-0">
        <div className="bg-white border shadow rounded">
          <div className="border-bottom">
            <p className="p-3 row mb-0">
              <span className="col-6">Price:</span>
              <span className="col-6">${product.discountedPrice}</span>
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
            <p className="p-3 mb-0">
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
            </p>
          </div>
          <p className="p-3 text-center mb-0">
            <button className="btn btn-success w-75" type="button">
              Add To Cart
            </button>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
