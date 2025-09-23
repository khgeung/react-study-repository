import React, { useState } from "react";
import "./App.css";
import LifecycleDemo from "./components/LifecycleDemo";

const App = () => {
  // 버튼 보이는 상태를 저장하기 위한 useState hook 정의
  // 배열 첫번째 상태변수, 배열 두번째 상태함수
  //useState - 리액트에 연결되어 내 상태를 알리기 위해 사용, (true) : 상태 변수의 기본값
  //useState의 리턴 값 : 배열
  const [showComponent, setShowComponent] = useState(true);

  return (
    <div>
      <div className="app-container">
        <h2>useEffect 라이프사이클 학습</h2>
        {/* <LifecycleDemo /> */}
        {/* 언마운트 테스트를 위한 버튼 onClick = 화살표함수 : 이벤트 핸들러 binding 등록 */}
        <button
          className="toggle-btn"
          // 이벤트 핸들러 바인딩
          onClick={() => setShowComponent(!showComponent)}
        >
          LifecycleDemo 컴포넌트 {showComponent ? "숨기기" : "보이기"}
        </button>
        {/* showComponent 상태가 true 일때만 LifecycleDemo를 렌더링 */}
        {showComponent && <LifecycleDemo />}
      </div>
    </div>
  );
};

export default App;
