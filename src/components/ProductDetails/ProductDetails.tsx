import { TRootState } from 'app/store';
import {
  selectProductById,
  useListQuery,
} from 'features/products/productsApiSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  // @ts-ignore
  const { isLoading } = useListQuery();
  const { productId } = useParams();

  const product = useSelector((state: TRootState) =>
    selectProductById(state, String(productId))
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <article className="row min-h-400px">
      <div className="col-5">
        <img
          className="img-rez rounded shadow"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className="col-4">
        <div className="bg-light">
          <p className="border-bottom fs-3 fw-bold p-3">{product.name}</p>
          <p className="border-bottom pb-3 px-3">Price: ${product.price}</p>
          <p className="pb-3 px-3">Description: {product.description}</p>
        </div>
      </div>

      <div className="col-3">
        <div className="bg-light border shadow">
          <div className="border-bottom">
            <p className="p-3 row mb-0">
              <span className="col-6">Price:</span>
              <span className="col-6">${product.price}</span>
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
            <p className="p-3 mb-0">Qty</p>
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
