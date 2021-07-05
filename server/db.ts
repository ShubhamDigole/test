import { set, connect } from "mongoose";

export default async () => {
    try {
        set('useFindAndModify', false);
       
        await connect('mongodb+srv://login:manoj@cluster0.wy2k0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, dbName: "login" ,useUnifiedTopology: true});
 
         console.log( "Database Connected Successfully")
    } catch (error) {
        console.error(error);
        return false;
    }
}