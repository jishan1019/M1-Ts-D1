{
  // Access Modifier

  class BankAccount {
    constructor(
      public readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    addDeposite(amount: number) {
      this._balance += amount;
    }

    getBalance(): number {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {}

  const poorAccount = new BankAccount(123, "poor User ", 20);

  poorAccount.addDeposite(100);

  console.log(poorAccount.getBalance());
}
