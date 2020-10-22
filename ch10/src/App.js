import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildCompo1 from "./components/ChildCompo1";
import CtxChildCompo2 from "./components/CtxChildCompo2";
import CtxChildCompo1 from "./components/CtxChildCompo1";
import NameContext from "./context/NameContext";
import UserCompo from "./components/UserCompo";
import UserContext from "./context/UserContext";
/*
  날짜 : 2020/10/22
  이름 : 김철학
  내용 : ch10.리액트 Context API

  Context API
   - 리액트 애플리케이션에서 전역적으로 사용할 데이터를 관리하는 컴포넌트
   - Context API에서 Provier는 데이터를 설정하고 Consumer에서 설정한 데이터를 사용한다.

*/

const user = { name: "홍길동", age: "21", addr: "부산" };

function App() {
  return (
    <div>
      <h3>ch10.리액트 Context API</h3>

      {/* 컴포넌트의 props로 데이터 전달 */}
      <ChildCompo1 name="홍길동" />

      {/* Context를 이용한 컴포넌트의 데이터 전달 */}
      <NameContext.Provider value={{ name: "홍길동" }}>
        <CtxChildCompo1 />
      </NameContext.Provider>

      {/* useContext() 리액트훅 사용 */}
      <UserContext.Provider value={user}>
        <UserCompo />
      </UserContext.Provider>
    </div>
  );
}

export default App;
