const input1 = [1,5,2,50,34,25,84,64]

const myFunc =(input1)=>{

    let myNum = 0;

    for(let i=0; i<input1.length; i++){
        if(input1[i]>myNum){
            myNum=input1[i]
        }
    }

    return myNum; 
}

console.log(myFunc(input1))