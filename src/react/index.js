import './ie';
import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './Router';
import './vendors';

render(
  <AppRoutes />,
  document.getElementById('app-root')
);