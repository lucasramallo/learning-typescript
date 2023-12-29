"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Account {
    constructor(type) {
        this.id = (0, uuid_1.v4)();
        this.number = this.gerarNumeroContaBancaria();
        this.balance = 0;
        this.type = type;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
    }
    getNumber() {
        return this.number;
    }
    setNumber(value) {
        this.number = value;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(value) {
        this.balance = value;
    }
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
    gerarNumeroContaBancaria() {
        const numeroConta = Math.floor(Math.random() * 1000000000).toString();
        return numeroConta;
    }
}
exports.default = Account;
