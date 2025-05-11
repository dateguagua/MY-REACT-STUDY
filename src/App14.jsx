import {useState} from "react"; //宣告帶表這些元件在react下

function App(){

    //變更count的方法叫setCount
   const[count, setCount] = useState(0);
   const[count2, setCount2] = useState(0);

    function handleClick(){
        setCount(count+1); //變更count內容並且自動渲染
    }
    function handleClick2(){
        setCount2(count2 -1); //變更count2內容並且自動渲染
    }


    return(
        <>
        <div>{count}</div>
       <div>{count2}</div>  {/* 要記得嘿！ */}
        <button onClick={handleClick}>按我一下count可以+1</button>
        <button onClick={handleClick2}>按我一下count可以-1</button>
        </>
    )
}
export default App;