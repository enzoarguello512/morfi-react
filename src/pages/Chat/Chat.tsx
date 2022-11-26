import ChatChannel from '../../components/ChatChannel/ChatChannel';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

const Chat = () => {
  return (
    <React.Fragment>
      <Navbar />
      <main className="mt-11 ff-lato-4">
        <section className="container-xxl mb-5">
          <ChatChannel />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Chat;
