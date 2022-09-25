import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import { BrowserRouter, Route} from "react-router-dom";
import Template from "./components/js/Template.js";
import TodoList from "./components/js/TodoList.js";
import TodoInsert from "./components/js/TodoInsert.js";

//useEffect 사용하면 앱이 처음 실행됐을 때 무언가 실행되도록 만들 수 있음

const App = () => {

  //const baseUrl = "http://localhost:8080"

  // useEffect(() => {
  //   getTodos();
  // }, []); //getTodos가 앱이 실행되자마자 딱 한번만 발생하도록, []를 붙여야 한번만 발생

  // async function getTodos() {
  //   /**
  //    * 함수이름이랑 url은 임시
  //    */
  //   await axios
  //   .get(baseUrl + "/todo") //데이터 불러오기
  //   .then((response) => {  //데이터 불러온 이후에 뭐 할건지
  //     console.log(response.data)  // response로 받아온 데이터
  //   })
  //   .catch((error) => {//데이터 받아오기 실패했을 경우
  //     console.error(error)
  //   })  
  // }

  const [todos, setTodos] = useState([
    {
      id: 1,
      user_id: 1,
      content: "할일 1",
      completed: false
    },
    {
      id: 2,
      user_id: 1,
      content: "할일 2",
      completed: true
    },
    {
      id: 3,
      user_id: 1,
      content: "할일 3",
      completed: true
    }
  ])
  return (
    <Template todoLength={todos.length}>
      <TodoList 
      todos={todos}
      />
      <TodoInsert />
    </Template>
  );

  // return (
  //   <BrowserRouter>
  //     <Route path="/" exact={true} component={Login} />
  //     <Route path="/login" exact={true} component={Login} />
  //     {(accessToken != null && accessToken !="")
  //     ? 
  //     <div>
  //       <Route path="/home" component={Home}/>
  //      </div>
  //       :<Route path="/" exact={true} component={Login} />
  //     }
  //   </BrowserRouter>
  // );
}

export default App;
