import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App'; // App.jsx의 위치에 따라 ./App 또는 ./src/App
import { Provider } from 'react-redux'; // Provider는 미리 import 해둡니다.
// import { store } from './src/store/store'; // 수정이 필요합니다: store를 import 하세요.

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>  // 수정이 필요합니다: store를 Provider에 전달하세요.
//     <App />
//   </Provider>
// );

// 아래는 위 주석을 참고하여 학생이 직접 <Provider> 설정을 해야 하는 부분입니다.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 여기에 Provider와 App 컴포넌트를 설정하세요. store가 아직 import되지 않았고 Provider에 연결되지 않았습니다. */}
    <App />
  </React.StrictMode>
); 