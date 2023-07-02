const input1 = {a:'Rajesh', b:12, c:92, d:'Khoksi'}

const input2 = {a:'Rajeshh', b:19, c:92, d:'Khoksi'}


const myFunc=(input1,input2)=>{
    let matchValue = {}
    for(const i in input1){
        if(input1[i]===input2[i]){
            matchValue[i]= input1[i]
            let newNumber = {}
            for(const num in Object.keys(matchValue[i])){
                newNumber[num]= Object.keys(matchValue[i])
            }
            
        }
    }
}


console.log(myFunc(input1,input2))