var fetchproducts = ()=>{

    var env = process.env.NODE_ENV ;

    if(env=="production"){
        return fetch(`${process.env.PUBLIC_URL}/ecom/Schema/ProductSchema.json`)
    }
    return fetch(`${process.env.PUBLIC_URL}/Schema/ProductSchema.json`)
};

export  {fetchproducts};