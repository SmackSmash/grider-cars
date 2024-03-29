import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0
  },
  reducers: {
    setName: (state, action) => {
      return { ...state, name: action.payload };
    },
    setCost: (state, action) => {
      return { ...state, cost: action.payload };
    }
  }
});

export const { setName, setCost } = formSlice.actions;
export default formSlice;
