(this.webpackJsonpecom=this.webpackJsonpecom||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),i=c(4),r=c.n(i),a=(c(9),c(2)),o=(c.p,c(10),c(0));var j=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"headerdiv",children:[Object(o.jsx)("h2",{style:{margin:"1vh"},children:"Ecom"}),Object(o.jsx)("h4",{style:{margin:"1vh"},children:"Where you get Everything best at a better price.."})]})})};var d=function(t){return Object(o.jsxs)("div",{className:"Footerdiv",children:[Object(o.jsxs)("div",{className:"Footersubdiv",children:[Object(o.jsxs)("div",{children:["Qty ",t.totalquantity]}),Object(o.jsxs)("div",{children:["Total ",t.totalprice]})]}),Object(o.jsx)("div",{className:"Footersubdiv",children:Object(o.jsx)("a",{className:0!==t.totalprice?"button":"button disabledbutton",href:0==t.totalprice?null:"#popup1",children:"Checkout"})})]})};var l=function(t){var e=Object(n.useState)(0),c=Object(a.a)(e,2),s=c[0],i=c[1],r=t.BrandName,j=t.ImageURL,d=parseInt(t.MRP),l=t.OfferText,u=parseInt(t.Price),b=t.Productname,h=t.Quantity,O=t.tprice,m=t.tquantity,p=function(e){var c=O,n=m;"+"==e?(n++,c+=u,i(s+1),t.settprice(c),t.settquantity(n)):"-"==e&&(n--,c-=u,i(s-1),t.settprice(c),t.settquantity(n))};return Object(o.jsxs)("div",{className:"Productdiv",children:[Object(o.jsxs)("div",{className:"prodimgdiv",children:[Object(o.jsx)("img",{className:"productImg",style:{height:"20vh"},src:"/ecom/"+j}),Object(o.jsx)("p",{children:l})]}),Object(o.jsxs)("div",{className:"proddtlsdiv",children:[Object(o.jsx)("p",{style:{fontFamily:"monospace",fontSize:"1.3rem",color:"green"},children:Object(o.jsxs)("b",{children:[r," "]})}),Object(o.jsx)("p",{children:b}),Object(o.jsx)("p",{children:h}),Object(o.jsxs)("p",{children:["MRP : ",d]}),Object(o.jsx)("p",{children:Object(o.jsxs)("b",{children:["Rs ",u]})}),Object(o.jsx)("button",{onClick:function(t){p("+")},children:"Add to Cart"}),Object(o.jsx)("button",{className:"roundnbutton",disabled:0==s,onClick:function(t){p("-")},children:"-"}),s,Object(o.jsx)("button",{className:"roundnbutton",onClick:function(t){p("+")},children:"+"})]})]})};var u=function(t){return Object(o.jsx)("div",{id:"popup1",className:"overlay",children:Object(o.jsxs)("div",{className:"popup",children:[Object(o.jsxs)("h2",{children:["Total Price : ",t.totalprice," INR"]}),Object(o.jsx)("a",{className:"close",href:"#",children:"\xd7"}),Object(o.jsx)("div",{className:"content",children:"Transaction Succesful!"})]})})};var b=function(){var t=Object(n.useState)([]),e=Object(a.a)(t,2),c=e[0],s=e[1],i=Object(n.useState)(0),r=Object(a.a)(i,2),b=r[0],h=r[1],O=Object(n.useState)(0),m=Object(a.a)(O,2),p=m[0],x=m[1];return Object(n.useEffect)((function(){return fetch("".concat("/ecom","/Schema/ProductSchema.json")).then((function(t){return t.json()})).then((function(t){console.log(t.products),s(t.products)})),function(){}}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"Productsdiv",children:c.map((function(t){return Object(o.jsx)(l,{BrandName:t["Brand name"],Productname:t["Product name"],Quantity:t.Quantity,Price:t.Price,MRP:t.MRP,ImageURL:t["Image URL"],OfferText:t["Offer Text"],settprice:h,settquantity:x,tprice:b,tquantity:p})}))}),Object(o.jsx)(d,{totalprice:b,totalquantity:p}),Object(o.jsx)(u,{totalprice:b,totalquantity:p})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(e){var c=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;c(t),n(t),s(t),i(t),r(t)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()},9:function(t,e,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.73073e23.chunk.js.map