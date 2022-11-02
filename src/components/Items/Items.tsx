import { IProduct } from 'common/types/product.interface';
import ProductPreview from 'components/ProductPreview/Product';
import { selectAllProducts } from 'features/products/productsApiSlice';
import { useAppSelector } from 'hooks/preTyped';

const Items = () => {
  const products: Array<IProduct> = useAppSelector(selectAllProducts);

  return (
    <section className="col-md-12 col-lg-8 col-xl-9">
      {!products.length ? (
        <div>
          <div className="d-flex justify-content-center">
            <div className="spinner-grow text-secondary my-2" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <h4 className="text-center my-4 mx-4 fw-bold ff-lato-4">
            The server is starting...
          </h4>
          <h5 className="text-center mx-4 ff-lato-4">
            If after a few minutes it does not load (it is a free tier, it can
            take up to 5 minutes), it is possible that the server in charge of
            the backend is down :(
          </h5>
        </div>
      ) : (
        <ul className="list-unstyled">
          {products.map((product: IProduct) => (
            <ProductPreview product={product} key={product.id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Items;
