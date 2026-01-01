import drizzelDb from "../drizzle_db_connection.js";
import { lotteriesTable } from "../schema.js";

const AddNewLottery = async (
    id: number,
    name: string,
    number_of_drawn: number,
    date_of_draw: string,
    winning_numbers_draw: number[],
) => {
    const winning_numbers_draw_string = winning_numbers_draw.join("-");

    try {
        await drizzelDb.insert(lotteriesTable).values({
            id,
            name,
            number_of_drawn,
            date_of_draw,
            winning_numbers_draw: winning_numbers_draw_string
        });
    } catch (error) {
        console.log(error.message);
    }
};

export default AddNewLottery;