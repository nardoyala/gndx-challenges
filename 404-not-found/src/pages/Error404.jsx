import React from 'react';
import './styles/Error404.scss';

const Error404 = () => (
  <>
    <header>
      <span>404 Not found</span>
    </header>
    <main className="error-page">
      <div className="error-page__image" />
      <div className="error-page__details">
        <h1>I have bad news for you</h1>
        <p>The page you are looking for might be removed or is temporarily unavailable</p>
        <button type="button">Back to homepage</button>
      </div>
    </main>
    <footer>
      <span>nardoyala</span>
    </footer>
  </>
);

export default Error404;
