import Navbar from '../../components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import React from 'react';
import ProductDetails from 'components/ProductDetails/ProductDetails';

const Product = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-11 ff-lato-4">
        <section className="container-xxl mb-5">
          <ProductDetails />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Product;
