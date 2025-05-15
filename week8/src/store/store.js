import { configureStore } from '@reduxjs/toolkit';
import _________ from './counterSlice'; // TODO: './counterSlice'에서 export default로 내보낸 counterReducer를 import 하기.

export const store = configureStore({
  reducer: {
    counter: _________, // TODO: 위에서 import한 counterReducer를 counter 키에 할당.
  },
});
