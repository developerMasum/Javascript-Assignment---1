// function inchiToFeet(inchi) {
//   const result = inchi / 12;
//   return result;
// }
// const myPerameter = inchiToFeet(2555);
// console.log("inchi To feet will be:", myPerameter);

// //  centimeter to meter ....

// function centimeterToMeter(centimeter) {
//   const meter = centimeter / 100;
//   return meter;
// }
// const myCentimeter = centimeterToMeter(9000);
// console.log("Meter Will be :", myCentimeter);

// //  paper requirements book1 --> 100pages, book2--> 200pages, book3-->300pages.. book lagbe, book1->2, bok2->3ta,book3-->5ta lagbe.. so, total page koyta lagbeee??

// function paperRequirements(book1, book2, book3) {
//   const perBook1 = 100;
//   const perBook2 = 200;
//   const perBook3 = 300;
//   const book1PapersRequire = perBook1 * book1;
//   const book2PapersRequire = perBook2 * book2;
//   const book3PapersRequire = perBook3 * book3;

//   const totalPapers =
//     book1PapersRequire + book2PapersRequire + book3PapersRequire;
//   return totalPapers;
// }

// const totalPapersReq = paperRequirements(2, 3, 5);
// console.log("total paper lagbe:", totalPapersReq);

// // break korba -negetive man thkleii pore r kono num result dekhaba nah.. sekhnei break

// function onlyPositiveNumber(numbers) {
//   const positiveNumber = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];

//     if (number < 0) {
//       break;
//     }
//     if (number > 0) {
//       positiveNumber.push(number);
//     }
//   }
//   return positiveNumber;
// }

// const numbers = [25, 52, 32, 30, 14, 42, 28, -50, 25, 36, 45];
// const result = onlyPositiveNumber(numbers);
// console.log(result);

// leap yr test hobe ekhon in a array

//  function leapYearTestinng(yearsForTest) {
//     const leapYearsAre = [];
//     for (let i = 0; i < years.length; i++) {
//         const year = years[i];
//         if (year % 4 ===0 ) {
//         leapYearsAre.push(year);

//         }

//     } return leapYearsAre;

//  }

//  const years = [ 2020, 2025, 2035, 2065, 2010, 2000];
//  const result = leapYearTestinng( years);
//  console.log(result);

//  !!------sob theke boro nam ber kora in a array ,
//  sob thheke lamba nam fnd ar tar ta ber kore fela ----!

// const friendsName = [ 'abul', 'josim', 'abul mal abdul mohit' , 'joshna' , 'monowara'];

function boroNameWalaFriend(names) {
  let largest = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];

    if (name.length > largest.length) {
      largest = name;
    }
  }
  return largest;
}
const friendsName = [
  "abul",
  "josim",
  "abul mal abdul mohit",
  "joshna",
  "monowara",
];
const result = boroNameWalaFriend(friendsName);
console.log(result);

// redian to degree cobverter

// function redianToDegree(redian) {
//   const phi =  3.1415926535897932384 ;

//   const Degree = redian * 180 / phi;
//   return Degree;

// }

// const resultDegree = redianToDegree(100).toFixed(2);
// console.log(resultDegree);



const phones = [
  { band: "walton", price: 2500000, wide: "32inch" },
  { band: "Samsung", price: 85000, wide: "52inch" },
  { band: "Xiaomi", price: 35000, wide: "24inch" },
  { band: "Vision", price: 15000, wide: "22inch" },
];

// ekhne theke sob theke kom dami tv ber korte hobe and seta kon tv tar details''''

function cheapest(phones) {
  let cheapest = phones[0];

  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest =  phone;
    }
  } 
  return cheapest;
}
const chepest = cheapest(phones);
console.log(chepest);
