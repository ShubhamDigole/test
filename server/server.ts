import * as express from "express";
import { json, urlencoded } from "body-parser"
import { join } from "path";

import index  from "./routes/index";
const app: express.Express = express();

app.use(express.static(join(__dirname, "public")));
app.use(urlencoded({ extended: true }));

app.use(json());


app.use("/", index);
const port: string | number = process.env.PORT || 3000;

app.listen(port, async () => {
    try {
        // await connect_db();
        console.log("server started successfully. on port " + port);
    } catch (error) {
        console.error(error);
    }
}); 