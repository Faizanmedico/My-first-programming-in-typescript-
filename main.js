//    My first programming in typescript
for (let i = 0; i < 1; i++) {
    // This statement is repeated 
    console.log(i, "Sultan's Pharmacy Order");
}
console.log("ORDER RECIVING");
let animals = ['2 Panadol Tab', '3 Ponstan Tab', '7 Disprin Tab', '10 Calpol Syp', '15 Vics Vap'];
for (let i in animals) {
    // Print each element of the array 
    console.log(i, animals[i]);
}
let payment = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Payment received');
    }, 7000);
});
for (let i = 0; i < 1; i++) {
    // This statement is repeated 
    console.log(i, "Welcome Faizanmedico!!");
}
let shipping = new Promise((resolve, reject) => {
    setTimeout(() => {
        for (let i = 0; i < 1; i++) {
            // This statement is repeated 
            console.log(i, "Thank YOU!!");
        }
        resolve('Order shipped');
    }, 9000);
});
let delivery = new Promise((resolve, reject) => {
    setTimeout(() => {
        for (let i = 0; i < 1; i++) {
            // This statement is repeated 
            console.log(i, "please wait");
        }
        resolve('Order Delivered');
    }, 6000);
});
try {
    let result = Promise.all([payment, shipping, delivery]);
    result.then(data => console.log(data));
}
catch (error) {
    console.log(error);
}
export {};
