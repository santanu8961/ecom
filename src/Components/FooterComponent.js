import React, { Component } from 'react'


function FooterComponent(props){
    return(
    <div className="Footerdiv">
        <div className="Footersubdiv">
            <div>Qty {props.totalquantity}</div>
            <div>Total {props.totalprice}</div>
        </div>
        <div className="Footersubdiv">
            <a className={props.totalprice!==0?"button" : "button disabledbutton"}  href={props.totalprice==0?null:"#popup1"}>Checkout</a>
        </div>
    </div>)
}

export default FooterComponent;