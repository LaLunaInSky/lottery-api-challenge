import { buildSchema } from "graphql";
import Query from "./query.js";
import Lottery from "./lottery.js";

const schema = buildSchema(`
    ${Query},
    ${Lottery}
`);

export default schema;