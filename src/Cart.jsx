import { useState } from "react";
import AddProduct from "./ShoppingCart/AddProduct";
import ListProduct from "./ShoppingCart/ListProduct";

function App() {

    const [products, setProducts] = useState([
        {id:1, text:'置物櫃', price:'4000'}, 
        {id:2, text:'書桌', price:'3000'}, 
        {id:3, text:'床頭櫃', price:'1500'},
    ])
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');

    const handleProductChange = (e) => {
        setProduct(e.target.value);
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const totalPrice = products.reduce((sum, item) => sum + Number(item.price), 0);


    const handleProductAdd = () => {
        const newId = products.length > 0 ? Math.max(...products.map((t)=>t.id)) + 1 : 1;
        const newProduct = {id:newId, text:product, price: price };
        setProducts([...products, newProduct]);
        setProduct(''); // 清空欄位資料
        setPrice('');
    }

    const handleProductDelete = (id) => {
        // 利用 filter 來過濾不需要的資料
        setProducts(products.filter((product) => product.id !== id));
    }

    return (
        <>
            <h1>My Shopping Cart</h1>
            
            <AddProduct product={product} 
                        handleProductChange={handleProductChange}
                        handlePriceChange={handlePriceChange}
                        price={price}
                        handleProductAdd={handleProductAdd}
                        />

            <h2>購物車內容</h2>
            <ListProduct products={products} handleProductDelete={handleProductDelete}/>
            <h3>TotalPrice：{totalPrice}</h3>
        </>
    )
}

export default App