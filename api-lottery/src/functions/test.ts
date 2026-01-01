import PullAllLoteries from "../../drizzle/cruds/pull_all_loteries.js";
import AddNewLottery from "../../drizzle/cruds/add_new_lottery.js";
import DataLotteries from "../database_model/lotteries.data.js";
import DeleteAnLottery from "../../drizzle/cruds/delete_an_lottery.js";
import PullAnLotteryByName from "../../drizzle/cruds/pull_an_lottery_by_name.js";
import AddTheIninitalDataModel from "./add_the_initial_data_model.js";

const Test = async () => {
    // Use only when you have no data!!!
    // await AddTheIninitalDataModel();

    // console.log(
    //     await PullAnLotteryByName(
    //         "quin"
    //     )
    // );
};

export default Test;