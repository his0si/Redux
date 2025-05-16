import { useSelector, useDispatch } from 'react-redux';
import { increment } from './store/counterSlice';

function Child() {
  const count = useSelector((state) => _________); // TODO: Redux 스토어에서 count 값을 가져오기.
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => _________}>+1</button>
    </div>
  ); // TODO: dispatch(increment())를 호출하여 카운터 값을 증가시키기.
}

export default Child;
