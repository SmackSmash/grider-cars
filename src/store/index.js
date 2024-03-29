import { configureStore } from '@reduxjs/toolkit';

import formSlice from './slices/formSlice';
import { setName, setCost } from './slices/formSlice';

import carsSlice from './slices/carsSlice';
import { setSearchTerm, addCar, removeCar } from './slices/carsSlice';

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    cars: carsSlice.reducer
  }
});

export { setName, setCost, setSearchTerm, addCar, removeCar };
export default store;
