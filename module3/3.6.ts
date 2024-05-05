{
  //getter and setter

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    // addDeposite(amount: number) {
    //   this._balance += amount;
    // }

    // getBalance(): number {
    //   return this._balance;
    // }

    get balance(): number {
      return this._balance;
    }

    set deposite(amount: number): number {
      this._balance += amount;
    }
  }

  const poorAccount = new BankAccount(123, "poor User ", 20);

  const myBalance = poorAccount.balance;
  poorAccount.deposite = 80;
}
