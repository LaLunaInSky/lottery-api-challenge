import cors from "cors";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { createHandler } from "graphql-http/lib/use/express";
import rootValue from "./graphql/rootValue/rootValue.js";
import schema from "./graphql/schema/schema.js";
import Test from "./functions/test.js";

const __filename = fileURLToPath(
    import.meta.url
);

const __dirname = path.dirname(
    __filename
);

const app = express();

app.get(
    "/",
    (
        req, res
    ) => {
        res.sendFile(
            path.join(
                __dirname,
                "..",
                "templates",
                "home_page.html"
            )
        )
    }
);

app.all(
    "/graphql",
    cors(),
    createHandler({
        schema,
        rootValue,
    }),
);

await Test();

export default app;