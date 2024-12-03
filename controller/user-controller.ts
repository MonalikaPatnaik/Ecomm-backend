import User from "../model/user-schema";
export const getUsers=async(req:any, res:any)=>{
    try{
        const users=await User.find({});
        res.status(200).json(users);
    }catch(error:any){
        res.status(500).json({message:"Error in fetching Orders" + error.message})
    }

}
export const createUser = async(req:any, res:any)=>{
    try{
        const {name, email,phoneno}=req.body;
        const newUser=User.create({
        name, email, phoneno
        });
        return res.status(200).json("successfully added user"
        );
    }catch(error:any){
        return res.status(500).json("Error creating user"+ error.message);
    }


}
export const UpdateUser = async(req:any, res:any)=>{
    
}