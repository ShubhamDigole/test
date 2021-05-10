import { set, connect } from "mongoose";

export default async () => {
    try {
        set('useFindAndModify', false);
         console.log( "Database Connected Successfully")
    } catch (error) {
        console.error(error);
        return false;
    }
}