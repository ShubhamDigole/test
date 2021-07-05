import * as express from "express";
import { json, urlencoded } from "body-parser"
import { join } from "path";
import connect_db from "./db";
import index  from "./routes/index";
import auth from "./routes/authRoute";

const app: express.Express = express();

app.use(express.static(join(__dirname, "public")));
app.use(urlencoded({ extended: true }));

app.use(json());
app.use("/test",auth);

app.use("/", index);
const port: string | number = process.env.PORT || 3000;

try {
    app.listen(port, async () => {
        try {
            await connect_db();
            console.log("server started successfully. on port " + port);
        } catch (error) {
            console.error(error);
        }
    }); 
} catch (err) {
    console.log(err);
    
}