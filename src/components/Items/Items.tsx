import { IProduct } from 'common/types/product.interface';
import ProductPreview from 'components/ProductPreview/Product';
import { useListQuery } from 'features/products/productsApiSlice';
import { setProducts } from 'features/products/productsSlice';
import { useAppDispatch } from 'hooks/preTyped';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Items = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { data, isLoading, isFetching } = useListQuery(location.search);

  useEffect(() => {
    if (!isLoading && data?.products) {
      dispatch(setProducts(data.products));
    }
  }, [data, isLoading, dispatch]);

  return (
    <section className="col-md-12 col-lg-8 col-xl-9">
      {isLoading && isFetching ? (
        <div>
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-secondary my-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <h4 className="text-center my-3 mx-4 fw-bold ff-lato-4">
            The server is loading...
          </h4>
          <h5 className="text-center mx-4 ff-lato-4">
            If after a few minutes it does not load (it is a free tier, it can
            take up to 5 minutes), it is possible that the server in charge of
            the backend is down :(
          </h5>
        </div>
      ) : data?.products && data.products.length === 0 ? (
        <div className="bg-light p-2 border">
          <h4 className="text-center my-4 mx-4 fw-bold ff-lato-4">
            Oops... we didn't find anything for this search :(
          </h4>
          <h5 className="text-center mx-4 mb-4 ff-lato-4">
            You can try a more general term or check that it is well written
          </h5>
        </div>
      ) : (
        <ul className="list-unstyled">
          {data?.products &&
            data.products.map((product: IProduct) => (
              <ProductPreview product={product} key={product.id} />
            ))}
        </ul>
      )}
    </section>
  );
};

export default Items;
