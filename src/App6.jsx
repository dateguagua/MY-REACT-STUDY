function App(){
    
    const items1 = ['Apple', 'Banana', 'Orange']
    

    const items2 = [
        <li key ='1'>Apple</li>,
        <li key ='2'>Banana</li>,
        <li key ='3'>Orange</li>,
    ]

    const items3 = items1.map((item,index) => (
        <li key={index}>{index}-{item}</li>
    )
)
       

    return(
        <>
          {items1}
          {items2}
        </>

    )


}
export default App
