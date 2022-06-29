// import React from 'react';
// import ReactDOM from 'react-dom';
// import Routes from './Routes';

// ReactDOM.render(<Routes />, document.getElementById('root'));

import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
