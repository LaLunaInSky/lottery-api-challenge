# Lottery API Challenge

## Initial Information
This project was developed with the intention of being the API used in the [Lottey Frontend Challenge]("https://github.com/LaLunaInSky/lottery-frontend-challenge") project.

## Introduction to the Challenge
This challenge involves building a GraphQL API with the results of 6 lotteries from Caixa Econômica Federal, namely:
* **Mega-Sena**;
* **Quina**;
* **Lotofácil**;
* **Lotomania**;
* **Timemania**;
* **Dia de Sorte**.

### Challenge Requirements
* The application should contain the most recent results from each of the 6  lotteries mentioned above;
* You will only need to return one lottery result at a time, using a filter based on the lottery name, in order to return the result;
* The API should contain a database from which it pull data, transforming it into a GraphQL query;
* The database can only contain one result fro each of the 6 lotteries.

### Expected Tecnologies
* **Express** with **Typescript**;
* Database connected to the API.

## My Solution to the Challenge
My solution to this challenge involves a lottery query, which requires a name filter. Passing the name of one of the lotteries, it then returns the data for that lottery.

### Project Link
My solution is online at the [LINK]("https://api-loteria.lalunainsky.com/").

### Query Calling Style
```graphql
query GetAnLottery {
    lottery(
        name: "quina" 
    ) {
        number_of_draw
        date_of_draw
        winning_numbers_draw
    }
}
```