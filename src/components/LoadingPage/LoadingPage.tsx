import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import React from 'react';

const LoadingPage = ({ message }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-11 ff-lato-4 text-center">
        <section className="container-xxl mb-5">
          <div className="d-flex justify-content-center align-items-center h-400px">
            <div>
              <h2>{message}</h2>
              <div className="spinner-border text-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LoadingPage;
