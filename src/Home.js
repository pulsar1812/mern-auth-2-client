import React from 'react';
import Layout from './components/Layout';
import { Helmet } from 'react-helmet';

const App = () => {
  const head = () => (
    <Helmet>
      <meta charSet='utf-8' />
      <title>MERN Stack</title>
      <link rel='canonical' href='#' />
    </Helmet>
  );
  return (
    <Layout>
      {head()}
      <div className='col-md-6 offset-md-3 text-center'>
        <h1 className='p-5'>React Node MongoDB Authentication Boilerplate</h1>
        <h2>MERN Stack</h2>
        <hr />
        <p className='lead'>
          MERN stack login register system with account activation, forgot
          password, reset password, login with facebook and google as well as
          private and protected routes for authenticated user and users with the
          role of admin.
        </p>
      </div>
    </Layout>
  );
};

export default App;
