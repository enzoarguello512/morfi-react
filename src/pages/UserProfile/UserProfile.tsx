import Navbar from '../../components/Navbar/Navbar';
import React from 'react';
import Footer from 'components/Footer/Footer';
import UserCard from 'components/UserCard/UserCard';

const UserProfile = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-11">
        <section className="container-xxl mb-5">
          <div className="row align-content-evenly justify-content-around">
            <UserCard />
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default UserProfile;
