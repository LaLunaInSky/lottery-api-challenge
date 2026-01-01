import { eq } from "drizzle-orm";
import drizzelDb from "../drizzle_db_connection.js";
import { lotteriesTable } from "../schema.js";

const PullAnLotteryByName = async (
    name: string
) => {
    try {
        const data = await drizzelDb.select().from(
            lotteriesTable
        ).where(
            eq(
                lotteriesTable.name,
                name
            )
        )

        if (
            data
        ) {
            if (
                data[0]
            ) {
                const {
                    id,
                    number_of_drawn,
                    date_of_draw,
                    winning_numbers_draw
                } = data[0];
                
                const winning_numbers_draw_string_array = winning_numbers_draw.split("-");
                const winning_numbers_draw_number_array: number[] = []

                winning_numbers_draw_string_array.map(
                    (string_item) => {
                        winning_numbers_draw_number_array.push(
                            Number(string_item)
                        );
                    }
                );

                const data_final = {
                    name: name,
                    number_of_draw: number_of_drawn,
                    date_of_draw: date_of_draw,
                    winning_numbers_draw: winning_numbers_draw_number_array,
                };

                return data_final;   
            } else {
                return data[0]
            }
        } else {
            return data;
        }
    } catch (error) {
        console.log(error.message);
    }
};

export default PullAnLotteryByName;