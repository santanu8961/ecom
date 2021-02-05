var fetchproducts = ()=>{

    var env = process.env.NODE_ENV ;

    if(env=="production"){
        return fetch(`${process.env.PUBLIC_URL}/Schema/ProductSchema.json`)
    }
    return fetch(`/Schema/ProductSchema.json`)
};

export  {fetchproducts};