class Transfer {
    sender: string;
    reciever: string;
    value: number;

    constructor(sender: string, reciever: string, value: number) {
        this.sender = sender;
        this.reciever = reciever;
        this.value = value;
    }

    public getSender(): string {
        return this.sender;
    }

    public setSender(sender: string): void {
        this.sender = sender;
    }

    public getReciever(): string {
        return this.reciever;
    }

    public setReciever(reciever: string): void {
        this.reciever = reciever;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }
}

export default Transfer;
