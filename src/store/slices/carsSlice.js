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
    setName: (state, action) => {
      return { ...state, name: action.payload };
    },
    setCost: (state, action) => {
      return { ...state, cost: action.payload };
    },
    addCar: ({ cars }, action) => {
      cars.push(action.payload);
    }
  }
});

export const { setName, setCost, addCar } = carsSlice.actions;
export default carsSlice;
