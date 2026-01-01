const Query = `
    type Query {
        lottery(
            name: String!
        ): Lottery
    }
`;

export default Query;