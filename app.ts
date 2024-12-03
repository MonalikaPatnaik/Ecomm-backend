import express from 'express';
import Routes from "./route";
import Connection from "./connection"

require('dotenv').config();

const PORT=process.env.PORT;
const user = process.env.MONGO_DB_USER;
const password = process.env.MONGO_DB_PASSWORD;

Connection(user,password);

const app=express();

app.listen(PORT, ()=>{
    console.log("App listening on",PORT);
})
app.use(express.json());
app.get('/',Routes);