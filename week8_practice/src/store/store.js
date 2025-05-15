import { configureStore } from '@reduxjs/toolkit';
// _________ import counterReducer from './counterSlice'; // 수정이 필요합니다: counterReducer를 import 하세요.

export const store = configureStore({
  reducer: {
    // counter: _________, // 수정이 필요합니다: counterReducer를 여기에 할당하세요.
  },
}); 