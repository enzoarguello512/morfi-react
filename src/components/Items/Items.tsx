import { IProduct } from 'common/types/product.interface';
import ProductPreview from 'components/ProductPreview/Product';
import { selectAllProducts } from 'features/products/productsApiSlice';
import { useAppSelector } from 'hooks/preTyped';

const Items = () => {
  const products: Array<IProduct> = useAppSelector(selectAllProducts);

  return (
    <section className="col-md-12 col-lg-8 col-xl-9">
      {!products.length ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-secondary my-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <ul className="list-unstyled ps-3">
          {products.map((product: IProduct) => (
            <ProductPreview product={product} key={product.id} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Items;
