import React from "react";
import ReactDOM from "react-dom";

export class loginForm extends React.Component {
  render() {
    return <h1>hi</h1>;
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<loginForm />, rootElement);

/*
    <form action="#" th:action="@{/}" th:object="${User}" method="post">
        <table>
            <tr>
                <td>Name:</td>
                <td><input type="text" th:field="*{userName}" /></td>
                <td th:if="${#fields.hasErrors('userName')}" th:errors="*{userName}"></td>
            </tr>
            <tr>
                <td>Age:</td>
                <td><input type="text" th:field="*{password}" /></td>
                <td th:if="${#fields.hasErrors('password')}" th:errors="*{password}"></td>
            </tr>
            <tr>
                <td><button type="submit">Login</button></td>
            </tr>
        </table>
    </form>





*/
