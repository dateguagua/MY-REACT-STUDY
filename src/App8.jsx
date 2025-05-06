function App(){
   /* //物件陣列
    const items = [
        {id:1, name:'蘋果',price:40, category:'水果'},
        {id:2, name:'洗髮精',price:120, category:'日用品'},
        {id:3, name:'香蕉',price:55, category:'水果'},
        {id:2, name:'牙膏',price:45, category:'日用品'},
    ]


    const items2 = items.map((item,index)=>(

<form key={item.id}>
    <label>
        名稱:
        <input  type="text" name="name" value={item.name} readOnly />
    </label>
    <label>
        價格:
        <input  type="text" name="price" value={item.price} readOnly />
    </label>
    <label>
        分類:
        <input  type="text" name="category" value={item.category} readOnly />
    </label>
</form>
        ))

        return (
            <div>
              <h2>商品列表（表單顯示）</h2>
              {items2}
            </div>
          )*/

            const products = [
                { id: 1, name: '蘋果', price: 40, category: '水果', qty:2 },
                { id: 2, name: '洗髮精', price: 120, category: '日用品' , qty:4},
                { id: 3, name: '香蕉', price: 55, category: '水果' , qty:6},
                { id: 4, name: '牙膏', price: 45, category: '日用品' , qty:8}
            ];
    
     // 計算價格總和
     //0是初始值 從零開始累加
     const totalPrice = products.reduce((sum, product) => sum + (product.price * product.qty), 0);
    
     return(
         <>
             <h1>商品列表</h1>
             <table border="1">
                 <thead>
                     <tr>
                         <th>ID</th><th>名稱</th><th>價格</th><th>數量</th><th>小計</th><th>類別</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         products.map((product) => {
                            const subtotal = product.price * product.qty;
                            return(
                             <tr key={product.id}>
                                 <td>{product.id}</td>
                                 <td>{product.name}</td>
                                 <td align="right">{product.price}</td>
                                 <td align="right">{product.qty}</td>
                                 <td align="right">{subtotal}</td>
                                 <td>{product.category}</td>
                             </tr>
                            );
                        })
                     }
                 </tbody>
                 <tfoot>
                     <tr>
                         <td colSpan="4" align="right">小計</td>
                         <td align="right">{totalPrice}</td>
                         <td></td>
                     </tr>
                 </tfoot>
             </table>
         </>
     )

}
export default App;