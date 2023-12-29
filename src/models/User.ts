import { v4 as uuidv4 } from 'uuid';
import Account from './Account'

class User {
    id: string
    name: string
    document: string
    accounts: Array<Account>

    constructor(name: string, document: string) {
        this.id = uuidv4();
        this.name = name;
        this.document = document;
        this.accounts = new Array;
    }

    public getId(): string {
        return this.id;
    }

    public setId(value: string) {
        this.id = value;
    }

    public getName(): string {
        return this.name;
    }
    
    public setName(value: string) {
        this.name = value;
    }

    public getDocument(): string {
        return this.document;
    }

    public setDocument(value: string) {
        this.document = value;
    }

    public getAccounts(): Account[] {
        return this.accounts;
    }
    
    public addAccount(account: Account) {
        this.accounts.push(account);
    }
}

export default User