// console.log("1. Start")

const { log } = require("node:console");

// // function prepareOrder(){
// //     console.log("2. Order Prepared");
// // }

// // prepareOrder();

// // setTimeout(()=>{
// //     console.log(("2. Order Prepared"));

// // }, 0)

// // console.log("3. Next customer");

// function confirmOrder(orderId,callback){
//     console.log(`Order ${orderId} is confirmed`);
//     callback(orderId)
// }

// confirmOrder("ORD-101", (id)=> {
//     console.log(`send notification for ${id}`);
// })

function fetchData(url, callback) {
  setTimeout(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      callback(null, data);
    } catch (error) {
      callback(error, null);
    }
  }, 2000);
}


fetchData("https://dummyjson.com/products", (error , response) => {
    if(error){
        console.log("Error:", error)
    }
    else{
        console.log(response)
    }
})

console.log("Fetching Data...");
