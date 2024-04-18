#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1,
    Euro: 0.89, // Euro 
    GBP: 0.74, // British Pound 
    JPY: 115.25, // Japanese Yen
    CAD: 1.27, // Canadian Dollar
    AUD: 1.36, // Australian Dollar
    CHF: 0.94, //  Swiss Franc
    PKR: 277.57, //Pakistani Rupee
};
let answer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "Euro", "GBP", "JPY", "CAD", "AUD", "CHF", "PKR"]
    },
    {
        name: "To",
        type: "list",
        message: "Enter To Currency",
        choices: ["USD", "Euro", "GBP", "JPY", "CAD", "AUD", "CHF", "PKR"]
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter Your Amount"
    }
]);
console.log(answer);
let fromAmount = currency[answer.From];
let toAmount = currency[answer.To];
let amount = answer.Amount;
let baseAmount = amount / fromAmount; //USD Base Currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
