import DataLotteries from "../../database/lotteries.data.js";

const lottery = (
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
        let lottery_return = null;

        DataLotteries.find(
            (lottery) => {
                if (
                    lottery.name === name
                ) {
                    lottery_return = lottery;
                }
            }
        )

        return lottery_return;
    }

};

export default lottery;