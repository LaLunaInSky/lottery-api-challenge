import { eq } from "drizzle-orm";
import drizzelDb from "../drizzle_db_connection.js";
import { lotteriesTable } from "../schema.js";

const UpdateAnLotteryInformations = async (
    name: string,
    number_of_draw: number,
    date_of_draw: string,
    winning_numbers_draw: number[],
) => {
    try {
        const winning_numbers_draw_string = winning_numbers_draw.join("-"); 

        await drizzelDb.update(
            lotteriesTable
        ).set({
            number_of_drawn: number_of_draw,
            date_of_draw: date_of_draw,
            winning_numbers_draw: winning_numbers_draw_string
        }).where(
            eq(
                lotteriesTable.name,
                name
            )
        )
    } catch (error) {
        console.log(error.message);
    }
};

export default UpdateAnLotteryInformations;