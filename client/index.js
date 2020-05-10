import React from 'react';
import { render } from 'react-dom';
// import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import store from './store';
import Reservation from './Components/Reservation';

const App = () => <Reservation />;

render(
  <Provider store={store}>
    <Reservation />
  </Provider>,
  document.getElementById('reservation'),
);

export default App;
