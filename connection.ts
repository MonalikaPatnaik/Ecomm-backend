import mongoose from 'mongoose';

const Connection= async(user:any,password:any)=>{
    const URL= ` mongodb+srv://${user}:${password}@ecomm.lb0tk.mongodb.net/?retryWrites=true&w=majority&appName=ecomm`;
   
    try {
        await mongoose.connect(URL);
         console.log('Database connected successfully');
    } catch (error) {
        console.log('Error: Database Coneection Failed');
    }
}
export default Connection;