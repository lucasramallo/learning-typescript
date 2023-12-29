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

    public getId(): string {
        return this.id;
    }

    public setId(value: string) {
        this.id = value;
    }

    public getNumber(): string {
        return this.number;
    }
    
    public setNumber(value: string) {
        this.number = value;
    }

    public getBalance(): number {
        return this.balance;
    }

    public setBalance(value: number) {
        this.balance = value;
    }

    public getType(): string {
        return this.type;
    }

    public setType(value: string) {
        this.type = value;
    }

    private gerarNumeroContaBancaria(): string {
        const numeroConta = Math.floor(Math.random() * 1000000000).toString()
    
        return numeroConta;
    }
}

export default Account