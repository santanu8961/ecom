var fetchproducts = ()=>{
    return fetch(`${process.env.PUBLIC_URL}/Schema/ProductSchema.json`)
};

export  {fetchproducts};