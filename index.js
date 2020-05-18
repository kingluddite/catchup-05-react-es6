// You start with an array of objects
const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

// You only want to output the id's
// forEach
// const officersIds = [];

// officers.forEach(officer => {
//   officersIds.push(officer.id);
// });
// console.log(officersIds); // [20, 24, 56, 88]

// It would be great if we didn't have to first create an empty array
// map to the rescue
// const mapOfficerIds = officers.map(officer => {
//   return officer.id;
// });
// refactor
// const mapOfficerIds = officers.map(officer => officer.id);
// console.log(mapOfficerIds); // [20, 24, 56, 88]

// So how does .map() work?
// It takes 2 arguments, a callback and an optional context (will be considered as `this` in the callback) not used above
// The callback runs for each value in the array and returns each new value in the resulting array
// NOTE: the resulting array will always be the same length as the original array

// .reduce()
// similar to map as it also runs a callback for each element of an array
// where .reduce() differs
// reduce passes the result of this callback (the accumulator) from one array element to the other
// NOTE: The accumulator can be be any type (integer, string, object, etc.) and must be instantiated or passed when calling .reduce()

// example of filter
// how could we get the accumulated age of all the pilots
// const pilots = [
//   {
//     id: 10,
//     name: "Poe Dameron",
//     years: 14,
//   },
//   {
//     id: 2,
//     name: "Temmin 'Snap' Wexley",
//     years: 30,
//   },
//   {
//     id: 41,
//     name: "Tallissan Lintra",
//     years: 16,
//   },
//   {
//     id: 99,
//     name: "Ello Asty",
//     years: 22,
//   }
// ];

// const totalYears = pilots.reduce((accumulator, pilot) => {
//   return accumulator + pilot.years;
// }, 0);
// const totalYears = pilots.reduce((accumulator, pilot) => accumulator + pilot.years, 0);
// console.log(totalYears); // 82
// we start counting at 0 (could also have used an existing value)
// after running the callback for each element of the array, reduce will return the final value of our accumulator (82)

// filter()
// Why? you have an array but you only want a few items from it
// could we use filter to create one array for Rebels and one array for Imperials?
// var pilots = [
//   {
//     id: 2,
//     name: "Wedge Antilles",
//     faction: "Rebels",
//   },
//   {
//     id: 8,
//     name: "Ciena Ree",
//     faction: "Empire",
//   },
//   {
//     id: 40,
//     name: "Iden Versio",
//     faction: "Empire",
//   },
//   {
//     id: 66,
//     name: "Thane Kyrell",
//     faction: "Rebels",
//   }
// ];
// const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
// const imperials = pilots.filter(pilot => pilot.faction === "Empire");
// console.log(`rebels: ${JSON.stringify(rebels)}, imperials: ${JSON.stringify(imperials)}`);

// resource for these notes: https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
