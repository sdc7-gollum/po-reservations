/* eslint-disable no-param-reassign */
import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const dateState = {
  checkin: null,
  checkout: null,
};

const dateSlice = createSlice({
  name: 'dates',
  initialState: dateState,
  reducers: {
    changeCheckin(state, action) {
      state.checkin = action.payload;
    },
    changeCheckout(state, action) {
      state.checkout = action.payload;
    },
  },
});

const roomState = {
  room: {},
};

const roomData = createSlice({
  name: 'room',
  initialState: roomState,
  reducers: {
    loadDataSuccess(state, action) {
      state.room = action.payload;
      state.error = null;
    },
    loadDataFailure(state, action) {
      state.room = null;
      state.error = action.payload;
    },
  },
});


const dateReducer = dateSlice.reducer;
const roomReducer = roomData.reducer;

const store = configureStore({
  reducer: {
    dateReducer,
    roomReducer,
  },
});

export default store;

export const { changeCheckin, changeCheckout } = dateSlice.actions;
export const { loadDataSuccess, loadDataFailure } = roomData.actions;

export const fetchData = () => async (dispatch) => {
  let response;
  try {
    response = await axios.get('/api/room/1');
  } catch (err) {
    dispatch(loadDataFailure(JSON.stringify(err)));
    console.log('Error in fetchData:', err);
    return;
  }
  dispatch(loadDataSuccess(response.data));
};
