import { configureStore } from '@reduxjs/toolkit';

import form from './slices/formSlice';
import { setName, setCost } from './slices/formSlice';

import cars from './slices/carsSlice';
import { setSearchTerm, addCar, removeCar } from './slices/carsSlice';

const store = configureStore({ reducer: { form, cars } });

export { setName, setCost, setSearchTerm, addCar, removeCar };
export default store;
