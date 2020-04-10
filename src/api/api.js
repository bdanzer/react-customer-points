import transactionData from "./data/transactionData";

/**
 * Mock promise as if it were an async request
 */
export const transactionsData = new Promise((resolve) =>
    resolve(transactionData)
);
