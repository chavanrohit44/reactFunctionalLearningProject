// console.log('log 1 ')
// console.log('log 2 ')

// console.log('log 3 ')
// process.nextTick(()=>{
//     console.log('next tick exceuted')
// })
// console.log('log 4 ')

// Promise.resolve().then(E=>{
// console.log('PROMISE CALLBACK')
// })

// process.nextTick(()=>{
//     console.log('Next Tick ')
// })
// Output ---
//Next tick
//PROMISE CALLBACK

    
// process.nextTick(() => {
//   console.log("proc next tick 1 ");
// });
// process.nextTick(() => {
//   console.log("proc next tick 2 ");
//   process.nextTick(() => {
//     console.log("inner next tick 2.1");
//   });
// });
// process.nextTick(() => {
//   console.log("proc next tick 3 ");
// });

// Promise.resolve().then((E) => {
//   console.log("PROMISE CALLBACK 1");
// });
// Promise.resolve().then((E) => {
//   console.log("PROMISE CALLBACK 2");
//   Promise.resolve().then((E) => {
//     console.log("INNER PROMISE CALLBACK 2.1");
//   });
// });
// Promise.resolve().then(E=>{
//     console.log('PROMISE CALLBACK 3')
// })
//OUPUT -
// proc next tick 1
// proc next tick 2
// proc next tick 3
// inner next tick 2.1
// PROMISE CALLBACK 1
// PROMISE CALLBACK 2
// PROMISE CALLBACK 3
// INNER PROMISE CALLBACK 2.1



/// NEW EXAMPLE

// setTimeout(()=>console.log('timeout 1'),1)
// setTimeout(()=>{
//     console.log('timeout 2')
//     process.nextTick(() => {
//         console.log("timeout next tick 1 ");
//       });
//      } ,0)
// setTimeout(()=>{
//     console.log('timeout 3')
//     Promise.resolve().then((E) => {
//         console.log("tiemout PROMISE CALLBACK 1");
//       });
// },0)

// process.nextTick(() => {
//   console.log("proc next tick 1 ");
// });
// process.nextTick(() => {
//   console.log("proc next tick 2 ");
//   process.nextTick(() => {
//     console.log("inner next tick 2.1");
//   });
// });
// process.nextTick(() => {
//   console.log("proc next tick 3 ");
// });

// Promise.resolve().then((E) => {
//   console.log("PROMISE CALLBACK 1");
// });
// Promise.resolve().then((E) => {
//   console.log("PROMISE CALLBACK 2");
//   Promise.resolve().then((E) => {
//     console.log("INNER PROMISE CALLBACK 2.1");
//   });
// });
// Promise.resolve().then(E=>{
//     console.log('PROMISE CALLBACK 3')
// })




const fs =  require('fs')
 fs.readFile('readText.txt','utf8',function(err,data){
    console.log('Innner callback ',data)
})

setTimeout(()=>{
    console.log('timeout..',0)
},0)

console.log("reading file ...")

process.nextTick(() => {
  console.log("Next tick 1 ");
});
Promise.resolve().then(E=>{
    console.log('PROMISE 1')
})

