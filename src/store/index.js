import { configureStore } from '@reduxjs/toolkit';

import carsSlice from './slices/carsSlice';
import { setName, setCost, setSearchTerm, addCar, removeCar } from './slices/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsSlice.reducer
  }
});

export { setName, setCost, setSearchTerm, addCar, removeCar };
export default store;
