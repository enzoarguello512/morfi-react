import { IProduct } from 'common/types/product.interface';
import ProductPreview from 'components/ProductPreview/Product';
import { useListQuery } from 'features/products/productsApiSlice';
import { setProducts } from 'features/products/productsSlice';
import { useAppDispatch } from 'hooks/preTyped';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Items = () => {
  const location = useLocation();
  const { data, isLoading } = useListQuery(location.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && data?.products) {
      dispatch(setProducts(data.products));
    }
  }, [data, isLoading, dispatch]);

  return (
    <section className="col-md-12 col-lg-8 col-xl-9">
      {isLoading ? (
        <div>
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-secondary my-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <ul className="list-unstyled">
          {data.products.map((product: IProduct) => (
            <ProductPreview product={product} key={product.id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Items;
