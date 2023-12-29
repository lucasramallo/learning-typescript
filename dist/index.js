"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./models/User"));
const Account_1 = __importDefault(require("./models/Account"));
const user = new User_1.default("Lucas", "13216694381");
const account = new Account_1.default("Corrente");
user.addAccount(account);
console.log(user);
