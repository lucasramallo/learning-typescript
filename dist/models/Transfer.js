"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transfer {
    constructor(sender, reciever, value) {
        this.sender = sender;
        this.reciever = reciever;
        this.value = value;
    }
    getSender() {
        return this.sender;
    }
    setSender(sender) {
        this.sender = sender;
    }
    getReciever() {
        return this.reciever;
    }
    setReciever(reciever) {
        this.reciever = reciever;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.default = Transfer;
