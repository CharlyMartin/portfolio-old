import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

import '../assets/stylesheets/application.scss';

import togglingItems from './helpers/toggle_items';

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

document.addEventListener('DOMContentLoaded', togglingItems);
