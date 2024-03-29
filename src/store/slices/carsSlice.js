import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    name: '',
    cost: 0,
    searchTerm: '',
    cars: []
  },
  reducers: {
    addCar: (state, action) => {
      state.cars.push(action.payload);
    }
  }
});

export const { addCar } = carsSlice.actions;
export default carsSlice;
