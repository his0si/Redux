import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // TODO: state.value를 1 증가시키는 코드를 작성.
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;

