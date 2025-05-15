import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      // 상태를 직접 수정하는 것이 가능함 (Immer 적용됨)
      // _________; // 수정이 필요합니다: state.value를 1 증가시키세요.
    },
  },
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer; 