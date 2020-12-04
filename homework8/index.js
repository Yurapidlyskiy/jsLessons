//                          2 task

// const countProps = function (obj) {
//   const keys = Object.keys(obj);
//   let total = 0;
// for(const key of keys){
//   total+=1;
// }
// return total;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3



//                                3 task

// const findBestEmployee = function (employees) {
//   let totalTasksDone = 0;
//   let theMostProductive = '';
//   for (const key in employees) {
//       if (employees[key] > totalTasksDone) {
//           totalTasksDone = employees[key];
//           theMostProductive = key;
//       }
//   }
//   return theMostProductive;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

  
//                              ДЗ 7, МЕНІ ЧОМУСЬ ОКРЕМО 7 ДЗ НЕ ХОТІЛО ПУШИТИ ТОМУ Я ЗРОБИВ ТАК

//                      task 1
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   user.mood = "happy"; // додав mood
//   user.hobby = 'skydiving'; // міняю hobby html на skydiving
//   user.premium = false; // тут зрозуміло

//   const keys  = Object.keys(user); 
//   for( const key of keys){
//   console.log(`${key} : ${user[key]}`);// ключ : значення
//   }


//                       task 2 
// const countTotalSalary = function(employees){
//     let total = 0;
//     for(employer in employees){
//         total+= employees[employer];
//     }
//     return total;
// }

// console.log(
//     countTotalSalary({
//         mango : 100,
//         poly : 150,
//         alfred : 80,
//     }),
// );//330