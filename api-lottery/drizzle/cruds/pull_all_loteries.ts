import drizzelDb from "../drizzle_db_connection.js"
import { lotteriesTable } from "../schema.js"

const PullAllLoteries = async () => {
    return await drizzelDb.select().from(
        lotteriesTable
    );
};

export default PullAllLoteries;