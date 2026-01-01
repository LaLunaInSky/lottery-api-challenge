import PullAnLotteryByName from "../../../drizzle/cruds/pull_an_lottery_by_name.js";

const lottery = async (
    args
) => {
    const {
        name
    } = args;

    if (
        name === ""
    ) {
        return null;
    } else {
        const data = await PullAnLotteryByName(
            name
        );

        if (
            data
        ) {
            console.log(data)

            return data;
        } else {
            return null;
        }
    }

};

export default lottery;