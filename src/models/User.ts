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

    getId(): string {
        return this.id;
    }
    setId(value: string) {
        this.id = value;
    }

    getName(): string {
        return this.name;
    }
    
    setName(value: string) {
        this.name = value;
    }

    getDocument(): string {
        return this.document;
    }

    setDocument(value: string) {
        this.document = value;
    }

    getAccounts(): Account[] {
        return this.accounts;
    }
    
    addAccount(account: Account) {
        this.accounts.push(account);
    }
}

export default User