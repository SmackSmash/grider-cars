import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    list: []
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    addCar: ({ list }, action) => {
      list.push(action.payload);
    },
    removeCar({ list }, action) {
      list.splice(list.indexOf(action.payload), 1);
    }
  }
});

export const { setSearchTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
