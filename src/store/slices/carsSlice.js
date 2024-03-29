import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: []
  },
  reducers: {
    setSearchTerm: (state, action) => {
      return { ...state, searchTerm: action.payload };
    },
    addCar: ({ cars }, action) => {
      cars.push(action.payload);
    },
    removeCar({ cars }, action) {
      cars.splice(cars.indexOf(action.payload), 1);
    }
  }
});

export const { setName, setCost, setSearchTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice;
