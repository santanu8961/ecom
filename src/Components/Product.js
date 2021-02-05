import React, { Component, useState } from 'react';

var env = process.env.NODE_ENV ;


function Product(props) {

    var [q, setq] = useState(0);

    var BrandName = props.BrandName;
    var ImageURL = props.ImageURL
    var MRP = parseInt(props.MRP);
    var OfferText = props.OfferText;
    var Price = parseInt(props.Price);
    var Productname = props.Productname;
    var Quantity = props.Quantity;
    var tprice = props.tprice;
    var tquantity = props.tquantity
    var updateprice = (symbol) => {
        var tp = tprice;
        var tq = tquantity;
        if (symbol == "+") {
            tq++;
            
            tp = tp+Price;
          //  alert(tp);
            setq(q+1);
            props.settprice(tp);
            props.settquantity(tq);
        } else if (symbol == "-") {
            tq--;
            tp = tp-Price;
            setq(q-1);
            props.settprice(tp);
            props.settquantity(tq);

        }
    }

   //    alert(11);

    return (
        <div className="Productdiv">

            <div className="prodimgdiv">
                <img className="productImg" style={{ height: "20vh" }} src={env == "production"?process.env.PUBLIC_URL+"/"+ImageURL:ImageURL} />
                <p>{OfferText}</p>
            </div>
            <div className="proddtlsdiv">
                <p style={{ fontFamily: "monospace", fontSize: "1.3rem", color: "green" }}><b>{BrandName} </b></p>
                <p>{Productname}</p>
                <p>{Quantity}</p>
                <p>MRP : {MRP}</p>
                <p><b>Rs {Price}</b></p>
               
                <button onClick={e => { updateprice("+") }}>Add to Cart</button>
                <button className="roundnbutton" disabled={q==0} onClick={e => { updateprice("-") }}>-</button>
                {q}
                <button className="roundnbutton" onClick={e => { updateprice("+") }}>+</button>

            </div>
        </div>
    )
}


export default Product;
