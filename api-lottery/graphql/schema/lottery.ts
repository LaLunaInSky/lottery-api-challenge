const Lottery = `
    type Lottery {
        name: String!
        number_of_draw: Int!
        date_of_draw: String!
        winning_numbers_draw: [Int!]!
    }
`;

export default Lottery;