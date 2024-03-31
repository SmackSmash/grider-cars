import { configureStore } from '@reduxjs/toolkit';

import form from './slices/formSlice';
import { setName, setCost } from './slices/formSlice';
export { setName, setCost };

import cars from './slices/carsSlice';
import { setSearchTerm, addCar, removeCar } from './slices/carsSlice';
export { setSearchTerm, addCar, removeCar };

const store = configureStore({ reducer: { form, cars } });

export default store;
