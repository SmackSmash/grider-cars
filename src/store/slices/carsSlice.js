import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: [],
  reducers: {
    addCar: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addCar } = carsSlice.actions;
export default carsSlice;
