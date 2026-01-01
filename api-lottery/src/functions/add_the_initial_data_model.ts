import AddNewLottery from "../../drizzle/cruds/add_new_lottery.js";
import PullAllLoteries from "../../drizzle/cruds/pull_all_loteries.js";
import DataLotteries from "../database_model/lotteries.data.js";

const AddTheIninitalDataModel = async() => {
    for (
        const index in DataLotteries
    ) {
        const {
            id,
            name,
            number_of_draw,
            date_of_draw,
            winning_numbers_draw
        } = DataLotteries[index];

        await AddNewLottery(
            id,
            name,
            number_of_draw,
            date_of_draw,
            winning_numbers_draw
        );
    }

    console.log(
        await PullAllLoteries()
    );
};

export default AddTheIninitalDataModel;