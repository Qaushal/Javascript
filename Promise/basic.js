//SIMPLE
// const pro1 = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("Doing task");
//             resolve();
//         },1000)
// })

// pro1.then(function(){
//     console.log("task completed");
// })

//THEN AND CATCH
// new Promise(function(resolve,reject){
//     console.log("fetching data");
//     setTimeout(function(){
//         let err = true;
//         if(!err){
//             resolve({username : "kaushal" , id:"21DIT029"})
//         }
//         else{
//             reject('ERROR OCCURES')
//         }
//     },2000)
// }).then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
//     return username;
// }).catch((error)=>{
//     console.log(error);
// })

//TRY AND CATCH
const trycatch = new Promise(function(resolve,reject){
    console.log("fetching data");
    setTimeout(()=>{
        let err = true;
        if(err){
            resolve({username : "kaushal" , id:"21DIT029"})
        }
        else{
            reject('ERROR OCCURES')
        }
    },2000)
})

async function tryandcatch(){
    try{
        const res= await trycatch
        console.log(res);
        console.log(res.username);
        console.log(res.id);
    }
    catch(error){
        console.log(error)
    }
}

tryandcatch()