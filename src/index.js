import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import NavBar from './components/NavBar';
import Container from './components/Container';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavBar />, document.getElementById("navbar"))
ReactDOM.render(<Container />, document.getElementById("container"))

registerServiceWorker();
