import { useSelector, useDispatch } from 'react-redux';
// import { increment } from './store/counterSlice'; // 수정이 필요합니다: increment 액션 생성자를 import 하세요.

function Child() {
  // const count = useSelector((state) => _________); // 수정이 필요합니다: state에서 counter의 value를 선택하세요.
  // const dispatch = useDispatch(); // 수정이 필요합니다: dispatch 함수를 가져오세요.

  return (
    <div>
      {/* <p>Count: {count}</p> */}
      {/* <button onClick={() => _________}>+1</button> */}
      {/* 수정이 필요합니다: 위 주석 처리된 부분을 완성하고 주석을 해제하여 count 값과 버튼이 동작하도록 만들어주세요. */}
      <p>Count: {/* 여기에 count 변수를 넣어주세요 */}</p>
      <button onClick={() => { /* 여기에 dispatch(increment())를 넣어주세요 */ }}>+1</button>
    </div>
  );
}

export default Child; 