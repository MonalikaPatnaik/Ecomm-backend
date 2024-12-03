const  Product  = require ("../model/product-schema.ts");
export const getProducts=async(req:any, res:any)=>{
    try{
        const products=await Product.find({});
        res.status(200).json(products);
    }catch(error:any){
        res.status(500).json({message:"Error in fetching Orders" + error.message})
    }

}

export const addProduct =async(req:any, res:any)=>{
    try{
        const{name,category,price,stock}=req.body;
        Product.create({
            name,category,price,stock
        })
        return res.staus(200).json("added product successfully");
    }catch(error:any){
        return res.status(500).json({message:"Error adding Product"+error.message});
    }
}