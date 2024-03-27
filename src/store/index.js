import { configureStore, createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: 'Hello There',
  reducers: {
    sayBye: () => {
      return 'Bye Bye';
    }
  }
});

const store = configureStore({
  reducer: {
    test: testSlice.reducer
  }
});

export const { sayBye } = testSlice.actions;
export default store;
