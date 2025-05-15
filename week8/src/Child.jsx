import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store/counterSlice';

function Child() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  );
}

export default Child; 