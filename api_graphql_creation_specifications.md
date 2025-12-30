# API GraphQL Creation Specifications

## Requeriments and Functionalities
* A **GraphQL API** application using **Express**, which will contain the latest results from the Lottery Caixa Econômica Federal, which are as follows:
    - **Mega-Sena**
    - **Quina**
    - **Lotofácil**
    - **Lotomania**
    - **Timemania**
    - **Dia de Sorte**
* A should only contain one data return, which will only return the result of one lottery, you will need to use a filter based on the lottery name
* The application will need to periodically check if the results of each lottery are up-to-date, based on the Caixa Econômica Federal website, and update the data if necessary
* The application should only contain a single result from each lottery

## Expected Tecnologies
* Using **Express with Typescript**
* The API should follow **GraphQL best practices** 