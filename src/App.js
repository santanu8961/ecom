import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import { useEffect, useState } from 'react';
import {fetchproducts} from "./Controllers/controller";
import Product from './Components/Product';
import ModalComponent from './Components/ModalComponent';

function App() {
    var [products,setproducts] = useState([]);
    var [tprice,settprice] = useState(0);
    var [tquantity,settquantity] = useState(0);
    
    useEffect(() => {
      fetchproducts().then(res=> {return res.json()}).then(prods => {
        console.log(prods.products)
        setproducts(prods.products)})
      return () => {
        
      }
    }, [])
  
  return (
    <div className="App">
        <HeaderComponent />
        <div className="Productsdiv">
          {
            products.map((product)=>{
             return (<Product 
             BrandName={product["Brand name"]} 
             Productname={product["Product name"]} 
             Quantity={product["Quantity"]} 
             Price={product["Price"]} 
             MRP={product["MRP"]} 
             ImageURL={product["Image URL"]} 
             OfferText={product["Offer Text"]} 
             settprice={settprice}
             settquantity={settquantity}
             tprice={tprice}
             tquantity={tquantity}
             />)
            })
          }
        </div>
        <FooterComponent totalprice={tprice} totalquantity={tquantity} />
        <ModalComponent totalprice={tprice} totalquantity={tquantity} />
    </div>
  );
}

export default App;
