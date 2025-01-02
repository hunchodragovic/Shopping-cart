import { useState, useEffect } from "react";
import Products from "./components/Products";
import "./App.css";
import CartItems from "./components/CartItems";
const dummyData = [
  {
    id: 1,
    title:
      "شاشة العاب منحنية 27 انش 16:9 2560x1440 165/144Hz 1 مللي ثانية شاشة العاب LED بدون اطار UG27Q AMD فري سينك بريميوم منفذ عرض HDMI من زد-ايدج",
    img: "https://m.media-amazon.com/images/I/71112BEzdCL._AC_UL320_.jpg",
    rate: 4.5,
    price: 1599.99,
    insteadOf: 1899.99,
  },
  {
    id: 2,
    title:
      "شاشة ألعاب منحنية من سوبتري مقاس 30 بوصة 21:9 2560x1080 فائقة العرض فائق النحافة HDR400 سعة 1 مللي ثانية HDMI لمكبر صوت مدمج حتى 200 هرتز، صورة بواسطة صورة معدنية سوداء (C305B-200UN1)",
    img: "https://m.media-amazon.com/images/I/71vTguaBMgL._AC_UL320_.jpg",
    rate: 4,
    price: 2099.99,
    insteadOf: 3099.99,
  },
  {
    id: 3,
    title:
      "نينجا مقلاة هوائية برو 4 في 1 بسعة 5 كوارت، مقلاة هوائية، تحميص، اعادة تسخين، تجفيف، تقنية هش الهواء مع 400 فهرنهايت للحصول على نتائج ساخنة ومقرمشة في دقائق معدودة، سلة غير لاصقة وطبق مقرمش، رمادي،",
    img: "https://m.media-amazon.com/images/I/71QwoGmcfUL._AC_UL320_.jpg",
    rate: 3,
    price: 720.99,
    insteadOf: 820.99,
  },
];
const initialCartItems = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")) : [];
function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    // call the api to get the products
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProducts(dummyData);
      setIsLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  } , [cartItems]);
  return (
    <div className="app-container">
      {isLoading ? <h1>Loading...</h1> : <Products products={products} setCartItems={setCartItems}/>}
      <CartItems cartItems={cartItems}/>
    </div>
  );
}

export default App;
