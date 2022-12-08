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
              <h2 className="mb-3">{message}</h2>
              <div className="spinner-border text-center" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <h4 className="text-center my-3 mx-4 fw-bold ff-lato-4">
                The server is starting...
              </h4>
              <h5 className="text-center mx-4 ff-lato-4">
                If after a few minutes it does not load (it is a free tier, it
                can take up to 5 minutes), it is possible that the server in
                charge of the backend is down :(
              </h5>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LoadingPage;
