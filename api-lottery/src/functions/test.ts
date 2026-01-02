import PullAllLoteries from "../../drizzle/cruds/pull_all_loteries.js";
import UpdateAnLotteryInformations from "../../drizzle/cruds/update_an_lottery_informations.js";
import DataLotteries from "../database_model/lotteries.data.js";
import AddTheIninitalDataModel from "./add_the_initial_data_model.js";

const Test = async () => {
    // Use only when you have no data!!!
    // await AddTheIninitalDataModel();

    // Use this when updating results data
    // DataLotteries.map(
    //     async (lottery) => {
    //         const {
    //             name,
    //             number_of_draw,
    //             date_of_draw,
    //             winning_numbers_draw
    //         } = lottery;

    //         await UpdateAnLotteryInformations(
    //             name,
    //             number_of_draw,
    //             date_of_draw,
    //             winning_numbers_draw
    //         );
    //     }
    // )
    // console.log(await PullAllLoteries());
};

export default Test;