const myPromises = new Promise((resolve, reject)=>{

    const myArray = [{
         name:'rajesh khoksi',
         age:25,
         phone:'0171421645',
         address:'Dhaka'
    },
    {
        name:'Hilary Areng',
         age:256,
         phone:'01728335645',
         address:'Dhaka'
    },
    {
        name:'Hilary Areng',
         age:25,
         phone:'01728335645',
         address:'Dhaka'
    }
]
    setTimeout(()=>{
        if(myArray.length>0){
            const newUser = []
           for(const user of myArray){
           const findUser = user.find(item => item.age===25)
                newUser.push(findUser)
           }
           resolve(newUser)
        }
        else{
            reject('There is not member in list')
        }
    },1000)
})


myPromises
.then(data => console.log(data))
.catch(error => console.log(error))