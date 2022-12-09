import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './styles/reset.scss';
import './styles/common.scss';
library.add(fab, far, fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
