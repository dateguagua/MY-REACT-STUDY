
// TodoList 練習
import './App.css'
import { useState } from 'react';

function App() {

    //const todos = ['吃早餐', '做體操', '寫程式'];
    const [todos, setTodos] = useState([
        {id:1, text:'吃早餐', completed:false},
        {id:2, text:'做體操', completed:true},
        {id:3, text:'寫程式', completed:false},
        
    ])
    const [todo, setTodo] = useState('');

    const handleTodoChange = (e) => {
        setTodo(e.target.value);
    }

    const handleTodoAdd = () => {
        //將現有todo裡面最大的數字抓出來+1 做成id （+1的另一個好處是刪除的時候不會讓id=0）
        const newId = todos.length > 0 ? Math.max(...todos.map((t)=>t.id))+1 : 1;
        const newTodo = {id:newId, text:todo, completed:false}
        setTodos([...todos, newTodo]);
        setTodo(''); // 清空欄位資料
    }

    const toggleCompletion = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed}:todo)
        )//根據 id 找到對應的待辦事項，將它的 completed 狀態反轉，其他項目維持不變，最後更新整個 todos 陣列
    }

    const handleTodoDelete =(id) => {
        //利用filter過濾不需要的資料
        setTodos(todos.filter((todo)=> todo.id !== id));
    }

    return (
        <>
            <h1>My TodoList</h1>
            <div>
                <input type='text' value={todo} onChange={handleTodoChange} />
                <button onClick={handleTodoAdd}>加入</button>
            </div>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through':'none'}}>
                            {todo.id}
                            <input type="checkbox" 
                                onChange={()=>toggleCompletion(todo.id)}
                                checked={todo.completed}/>
                            {todo.text}


                               <button onClick={() => handleTodoDelete(todo.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default App
