import { v4 as uuidv4 } from 'uuid';

class Account {
    id: string
    number: string
    balance: number
    type: string

    constructor(type: string) {
        this.id = uuidv4();
        this.number = this.gerarNumeroContaBancaria()
        this.balance = 0
        this.type = type;
    }

    getId(): string {
        return this.id;
    }

    setId(value: string) {
        this.id = value;
    }

    getNumber(): string {
        return this.number;
    }
    
    setNumber(value: string) {
        this.number = value;
    }

    getBalance(): number {
        return this.balance;
    }

    setBalance(value: number) {
        this.balance = value;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

    private gerarNumeroContaBancaria(): string {
        const numeroConta = Math.floor(Math.random() * 1000000000).toString()
    
        return numeroConta;
    }
}

export default Account