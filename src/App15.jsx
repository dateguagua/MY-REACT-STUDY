//useState與事件處理＋展開運算子...
import { useState } from "react"

function App(){
    const [inputMessage, setInputMessage] = useState('');
    const [messages, setMessages] = useState([]); //預設空陣列

    const handleInputChange = (e)=>{ //e event
        setInputMessage(e.target.value); //e.target.value是input欄位的內容
    }

    const handleKeyDown =(e)=>{
        //輸入enter則自動呼叫handleAddMessage()
        if(e.key === 'Enter'){
            handleAddMessage();
        }
    }

    const handleAddMessage = ()=>{
        //setMessages(messages.concat(inputMessage));
        setMessages([...messages, inputMessage]);
    }    

    return(

        <>
            <input type='text' value={inputMessage} onChange={handleInputChange} onKeyDown={handleKeyDown}/>
            {/* value={inputMessage}綁定   onChange={handleInputChange}加這個才可以改*/}
            <button onClick={handleAddMessage}>Send</button><p/>
            {messages}
            <p/>
            <ul>
                {
                    messages.map((messages, index) => (
                        <li key ={index}>{index}:{messages}</li>
                    ))
                }
            </ul>
        </>
    )

}
export default App;