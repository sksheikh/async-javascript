//____Asynchronous
// const takeOrder = (customer, callback) => {
//   console.log(`Take order for ${customer}`);
//   callback(customer);
// }

// const processOrder = (customer, callback) => {
//   console.log(`Proccessing order for ${customer}`);

//   setTimeout( () => {
//     console.log('Cooking completed');
//     console.log(`order processed for ${customer}`);
//     callback(customer);
//   }, 5000);


// }

// const completeOrder = (customer) => {
//   console.log(`completed order for ${customer}`);
// };


// takeOrder('customer 1', (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer);
//   });
// });

// takeOrder('customer 2', (customer) => {
//   processOrder(customer, (customer) => {
//     completeOrder(customer);
//   });
// });

// console.log('hello world');


//____Promise
// const hasMeeting = true;

// const meeting = new Promise( (resolve, reject) => {
//   if(!hasMeeting) {
//     const meetingDetails = {
//       name: 'Technical Metting',
//       location: 'Google meet',
//       time : '10:00 pm'
//     };

//     resolve(meetingDetails);

//   }else{
//     reject(new Error('meeting already scheduled'));
//   }
// });


// const addToCalender = (meetingDetails) => {
//   // return new Promise( (resolve, reject) => {
//     return Promise.resolve(`${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`);
//   // })
// }

// meeting
//   .then(addToCalender)
//   .then((res) => {
//     //resolved data
//     console.log(JSON.stringify(res));
//   })
//   .catch((err) => {
//     //rejected data
//     console.log(err.message);
//   })

// console.log('hello world');


// const promise1 =  Promise.resolve(`Promise 1 resolved`);
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Promise 2 resolved`);
//   },2000);
// })

// promise1.then((res) => {console.log(res)});
// promise2.then((res) => {console.log(res)});

// Promise.race([promise1, promise2]).then((res) => {
//   console.log(res);
// })

// async function myFunction() {
//   try {
//     const meetingDetails = await meeting;
//     const calender =  await addToCalender(meetingDetails);
//     console.log(calender);
//   } catch (error) {
//     console.log('Something went wrong');
//   }
// }

// myFunction();


// function myDisplayer(some) {
//   console.log(some);
// }
   
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
  
// let result = myCalculator(5, 5);
// myDisplayer(result);

const function1 = (callback) => {
  setTimeout(function() {
    console.log(`1st Function`);
    callback();
  }, 3000)
}

const function2 = () => {
  console.log(`2nd Function`);
}

function1(function2);




