import { configureStore } from '@reduxjs/toolkit';

import carsSlice from './slices/carsSlice';
import { setName, setCost, addCar } from './slices/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer
  }
});

export { setName, setCost, addCar };
export default store;
