function AddProduct({product, handleProductChange, price, handlePriceChange, handleProductAdd}){
    return(
    <div>
        <input type="text" placeholder="商品名稱" value={product} onChange={handleProductChange}/>
        <input type="price" placeholder="商品價錢" value={price} onChange={handlePriceChange}/>
        <button onClick={handleProductAdd}>加入購物車</button>
    </div>
    )
}export default AddProduct