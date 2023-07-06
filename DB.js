import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: "5432",
  database: "banktransfer_project",
});

export const moveMoney = (soruceAccount, targetAccount, amount) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "UPDATE accounts SET balance = balance - $1 WHERE account_number = $2",
      [amount, soruceAccount],
      (error, result) => {
        if (error) {
          // res
          //   .status(500)
          //   .json({ error: "Error deducting funds from source account" });
          reject("Error deducting funds from source account")
          return;
        }
      }
    );
    // Add the transferred amount to the destination account
    pool.query(
      "UPDATE accounts SET balance = balance + $1 WHERE account_number = $2",
      [amount, targetAccount],
      (error, result) => {
        if (error) {
          reject("Error adding funds to destination account")
          return;
        }
      }
    );
    resolve();
  });
};

export const getBalance = (accountNumber) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "SELECT balance FROM accounts WHERE account_number = $1",
      [accountNumber],
      (error, result) => {
        if (error) {
          // res
          //  .status(500)
          //  .json({ error: "Error checking source account balance" });
          reject("Error checking source account balance")
          return;
        }
        if (result.rows.length === 0) {
          // reject("Account not found");
          resolve(null)
        } 
        else {
          resolve(result.rows[0].balance)
        }
      })
  })
}
