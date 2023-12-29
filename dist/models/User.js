"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class User {
    constructor(name, document) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.document = document;
        this.accounts = new Array;
    }
    getId() {
        return this.id;
    }
    setId(value) {
        this.id = value;
    }
    getName() {
        return this.name;
    }
    setName(value) {
        this.name = value;
    }
    getDocument() {
        return this.document;
    }
    setDocument(value) {
        this.document = value;
    }
    getAccounts() {
        return this.accounts;
    }
    addAccount(account) {
        this.accounts.push(account);
    }
}
exports.default = User;
