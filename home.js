const myObject={
    price: 50,
    vat: 10,
    totalAmount: ()=>{
        return this.price + " "+ this.vat;
    }
}

console.log(myObject.totalAmount)