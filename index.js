const vaxTail =(people)=>{
    const result = {
        A:[],
        B:[],
        C:[],
        D:[]
    }

    for(person of people){
        if(person.age && person.name && person.tempurature){
           if(person.tempurature >=101 && person.age >=51){
            result.D.push(person)
           }
           else if(person.age>=41 && person.age<=50){
            result.C.push(person)
           }
           else if(person.age>=31 && person.age<=40 || person.tempurature >=101){
            result.B.push(person)
           }
           else if( person.age>=20 && person.age <=31 ){
            result.A.push(person)
           }
        }else{
            console.log('Invalid Person information')
        }
    }

    return result
}


const people=[
    {name:"Rajesh Khoksi", age: 20, tempurature:99},
    {name:"Hulary Areng", age: 40, tempurature:98},
    {name:"Bipul Khoksi", age: 80, tempurature:101},
    {name:"Joyonto Marak", age: 50, tempurature:101}
]

const finalResult = vaxTail(people);
console.log(finalResult)


const myObject = {
    name:'Rajesh',
    age: 30,
    fullName: ()=>{
         console.log(this.name + this.age)
    }
}