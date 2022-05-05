import "./App.css";
import TodoContainer from "./components/TodoContainer";
import TodoContext from "./contexts/TodoContext";
function App() {
  return (
    <div className="App-header">
      <TodoContext>
        <TodoContainer></TodoContainer>
      </TodoContext>
    </div>
  );
}

export default App;
