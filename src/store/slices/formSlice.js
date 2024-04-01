import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setCost: (state, action) => {
      state.cost = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(addCar().type, state => {
      state.name = '';
      state.cost = 0;
    });
  }
});

export const { setName, setCost } = formSlice.actions;
export default formSlice.reducer;
