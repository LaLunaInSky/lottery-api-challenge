import { eq } from "drizzle-orm";
import drizzelDb from "../drizzle_db_connection.js";
import { lotteriesTable } from "../schema.js";

const DeleteAnLottery = async (
    id: number
) => {
    try {
        await drizzelDb.delete(
            lotteriesTable
        ).where(
            eq(
                lotteriesTable.id,
                id
            )
        );
    } catch (error) {
        console.log(error.message);
    }
};

export default DeleteAnLottery;