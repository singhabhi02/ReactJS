const { resolve } = require("node:dns");

function processPayment(amount) {
  return new Promise((resolve, reject) => {
    if (amount > 0) {
      resolve({
        status: "Success",
        amount: amount,
      });
    } else {
      reject(new Error("Invalid payment amount"));
    }
  });
}

processPayment(0)
  .then((result) => {
    console.log("Payment Successful:", result);
  })
  .catch((error) => {
    console.error("Payment Failed:", error.message);
  });
