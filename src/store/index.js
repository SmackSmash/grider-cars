import { configureStore, createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: 'Hello There',
  reducers: {
    sayBye: (state, action) => {
      state = 'Bye Bye';
    }
  }
});

const store = configureStore({
  reducer: {
    test: testSlice.reducer
  }
});

export default store;
