//TodoList練習
import { useState } from "react";
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, done: false }]); // 加進陣列 ...todos 是展開現有資料，然後加上新的一筆物件。
    setInput(''); // 清空輸入框
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    // 取出第 index 筆資料
    // 把它的 done 值反轉
    // 如果原本是 false（未完成），就變成 true（完成）
    // 如果原本是 true，就變回 false
    setTodos(newTodos);
  };

  return (
    <>
      <h1>My TodoList</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="輸入待辦事項"
      />
      <button onClick={handleAdd}>新增</button>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleDone(index)}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
