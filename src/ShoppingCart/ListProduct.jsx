//傳入整個 products 陣列作為 props
function ListProduct({products, handleProductDelete}){
    return(
        <ul>
        {products.map((p) => (
            <li key={p.id}>
            {p.text} - 價錢：${p.price}
            <button onClick={() => handleProductDelete(p.id)}>X</button>
            </li>
        ))}
    </ul>
    )
}
export default ListProduct;