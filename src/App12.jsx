//React組建間參數傳遞

//子組件
function CircleArea({r}) {
    const pi = 3.1415926;
    const area = r * r * pi;
    return(<div>{area}</div>)
}

const CircleArea2 =({r})=>{
    const pi = 3.1415926;
    const area = r * r * pi;
    return(<div>{area}</div>)
}

const Fruit = ({fruitName, fruitPrice})=> {
    return (<div>水果名稱:{fruitName} 水果價格:{fruitPrice}</div>)
}
const Fruit2 = (props) => { //數量很多時用這個
    return (<div>水果名稱:{props.fruitName} 水果價格:{props.fruitPrice}</div>)
}
const Fruit3 = (props) => {
    props.printlog(); //下載一個函式 會在網頁檢查碼出現
    return (<div>水果名稱:{props.fruitName} 水果價格:{props.fruitPrice}</div>)
}


//父組件
function App(){

    return(
        <>
         <CircleArea r="10" />
         <CircleArea2 r="100"/>
         <Fruit fruitName="Apple" fruitPrice="50"/>
         <Fruit2 fruitName="Banana" fruitPrice="70"/>
         <Fruit3 fruitName="Orange" fruitPrice="40" printlog={() => {console.log('我是柳丁')}}/>
        </>
    )
}

export default App;