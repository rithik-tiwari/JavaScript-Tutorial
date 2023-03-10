// tut2.
console.time('Your code time');
console.log('hellow console');
console.log(4+5);
console.log(true); //boolean
console.log([34,2,3,4]);   //print 34,2,3,4
console.log({harry: 'this', marks:95});  //prints as an line
console.table({harry: 'this', marks:95});  //prints as an table
console.warn('this is a warining');  //prints as a warning
//console.clear();  //clear all the console  but don't do this when u are calulating the time of code.
console.timeEnd('Your code time');
console.assert(283<180, 'Age >180 is not possible'); //prints as a error if age cross 180.
console.error('This is a error'); //prints as as error
// for single line comment
/*
for multiple
line 
comment
*/ 
// tut3.
const arr1=[4,5,6,7];
arr1.push(2);  // this will add 2 in [4,5,6,7] and will become [4,5,6,7,2].
console.log(arr1);
/*
most common programing case types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/
Math.random(); // takes a number between 0-1
Math.random() * 4;   // takes a number between 0-4
Math.floor(5.67);   // prints: 5

// tut4.
let myName='op';
console.log(`my name is ${myName}.`); // prints as my name is op

// if...else statements.
let sale = true;
sale = false;
if (sale) {
    console.log('Time to buy!');
}      // if the statement is true than the code inside the {} will run .
else {
    console.log('Time to wait fir a sale.'); 
}  // if statement is false than the code inside the {} will run .

// comparision operators.
/* ===  equal to
   !==  not equal to
   >  greater than
   <  less than
   >=  greater than ot equal to
   <=  less than or equal to
*/
console.log('apples' === 'oranges') // false
console.log(10 < 12) // Evaluates to true

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!')
}   // prints: we can eat later     because the hungerLevel < 7.
 
// Logical operator.
/*  There are three logical operators:
the and operator (&&)
the or operator (||)
the not operator, otherwise known as the bang operator (!)  */
/*  in case of and (&&) for two statements  both should be true than the statement is true, otherwise false.
 in case of or (||) for two statements any one statement should be true than the statement is true ,otherwise false.
 if any statement is true than not(!)of the statement is false and vice-versa.
 */

 // truthy and falasy..
 
 let tool = 'marker';
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`); //prints: The marker is mightier than the sword.

//Ternary Operator
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.')
: console.log('You will not need a key to open the door.'); //prints: You will not need a key to open the door. 


let favoritePhrase = 'Love That!';
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!"); //prints: I love that!. 

/* If the condition evaluates to true, the first expression executes.
If the condition evaluates to false, the second expression executes. */

// else if
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}  // prints: It's sunny and warm because it's summer! .

// The switch Keyboard
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
   break;
  case 'second place':
  console.log('You get the silver medal!');
   break;
  case 'third place':
  console.log('You get the bronze medal!');
   break;
  default:
  console.log('No medal awarded.');
   break;
} // prints: You get the gold medal!

// tut 5.
// function  ( this can be used multiply times )    
getReminder();
function getReminder() {
  console.log('Water the plants.');
} //prints: Water the plants.
// to call this function next time just write the identifier i.e; [getReminder();] for this case.

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');
// prints; Thank you for your purchase Cole! We appreciate your business.
sayThanks('Gyan')
// prints: Thank you for your purchase Gyan! We appreciate your business.

// default function
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();  
/* prints: Remember to buy milk
           Remember to buy bread
           Remember to buy eggs   
*/
//Return
function monitorCount(rows, columns) {
  return rows * columns
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);  // prints: 20

function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);
// prints: 4000
const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
  } 
  console.log(plantNeedsWater('Tuesday'));
  //prints: false

  // Arrow Function
  /* instead of using [function(x, x)] we can use [(x, x) =>]
  the arrow symbole denotes the function .
  */
  const plantNeedsWater1 = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };// ----


  const needsWater = day => day === 'Saturday' ? true : false;
  console.log(needsWater('Saturday'));
 //prints: true
/* 1. The parentheses around [day] have been removed, since it has a single parameter.
   2. The curly braces { } have been removed since the function consists of a single-line block.
   3. The return keyword has been removed since the function consists of a single-line block.
   4. the[if] is replaced with [Ternery operator.]
*/

// Array
const hobbies = ['yo','yo','honey singh'];
console.log(hobbies);   //prints: ['yo','yo','honey singh'].

const famousSayings = ['Fortune favors the brave.'/* 0 value*/, 'A joke is a very serious thing.'/* 1 value*/, 
'Where there is love there is life.'/* 2 value*/];
let listItem = famousSayings[0];
console.log(listItem);//prints: Fortune favors the brave.
console.log(famousSayings[2]);// prints: Where there is love there is life 
console.log(famousSayings[3]);//prints: undefined.

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
console.log(groceryList);  // prints: ['bread', 'avocados', 'milk'] 

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments);// prints: ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']
condiments = ['Mayo'];
console.log(condiments);// prints: ['Mayo']
utensils[3] = 'Spoon';
console.log(utensils); // prints: ['Fork', 'Knife', 'Chopsticks', 'Spoon']
utensils = ['Fork'];
console.log(utensils); //prints: Error because const value can't be reassigned.

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); //prints: 3  (because the objective has 3 elements in it).

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('yo','yo');
console.log(chores);//prints:[ 'wash dishes', 'do laundry', 'take out trash', 'yo', 'yo' ].

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
const removed = chores.pop(); // .pop() removes the last element.
console.log(chores); // prints:['wash dishes', 'do laundry', 'take out trash', 'cook dinner']
console.log(removed); // prints: ['mop floor']  .
// for more array methoda visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){ 
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);//prints:['arrays', 'can', 'be', 'MUTATED']
function removeElement(newArr) {
  newArr.pop();
}
removeElement(concept);
console.log(concept);//prints:['arrays', 'can', 'be'].

const numberClusters = [[1,2], [3,4], [5,6]]; //the position of 6 is [2][1].
const target = numberClusters[2][1];
console.log(target); // prints: 6  

// For  loop
for (let number = 5; number<11; number++) { 
  console.log(number);
} /* prints: 5
             6
             7
             8
             9
             10 */     
 for (let int = 3; int>=0; int--) {
  console.log(int);
      /* prints: 3
                 2
                 1
                 0 */                        
 

const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i<vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i])
} /* prints: I would love to visit Bali
            I would love to visit Paris 
            I would love to visit Tulum 
*/

const bobsFollowers = ['ram', 'shyam', 'ghanshyam', 'radheshyam']
const tinasFollowers = ['ram', 'shyam', 'gopi']
const mutualFollowers = []
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
     }
  }
 }
console.log(mutualFollowers);  //prints: ['ram', 'shyam']

// while loop .
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}  // A while loop that prints 1, 2, and 3

const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = []
while (currentCard != 'spade') {currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
} // run this code and see what it prints every time.

// do while
let t = 0
do {
  console.log{t};
  t++;
} while (t<5);  //prints: 0,1,2,3,4
// continue and break .
let j = 0
do {
  if (j === 3) {
    break;
  }
  console.log{j};
  j++;
} while (j<5);  //prints: 0,1,2

let l = 0
do { if(l === 3) {
  continue;
}
  console.log{l};
  l++;
} while (l<5);  //prints: 0,1,2,4

;let Obj = {
  name: "Gyan Bhai",
  age: 18,
  type: "Coder",
  os: "codehub"
}
for (let key in obj){
  console.log(`The ${key} of object is ${obj[key]}`)
}

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};
const is2p2 = 
checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name); // prints: checkThatTwoPlusTwoEqualsFourAMillionTimes .

/*
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);
*/

// iterators 
//  .forEach
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))
/* prints: I want to eat a mango.
           I want to eat a papaya.
           I want to eat a pineapple.
           I want to eat a apple.
*/
//  .map
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => {
  return animal[0]
})
console.log(secretMessage); // prints: [H, e, l, l, o, W, o, r, l ,d]
// .join will combaine the outputs together .
console.log(secretMessage.join('')); // prints: HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(bigNumber => {
  return bigNumber / 100
})
console.log(smallNumbers) //prints: [1, 2, 3, 4, 5]
console.log(smallNumbers.join('')); // prints: 12345

// .filter
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(randomNumber => {return randomNumber < 250})
console.log(smallNumbers); // prints: [200, 3.14, 7, 13]

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7
})
console.log(longFavoriteWords); // prints: ['nostalgia', 'hyperbole','esoteric']

// .findIndex()   (will return the index of the first element which evaluates to true for that condition.)
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'
})
console.log(foundAnimal); // prints: 7
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
})
console.log(startsWithS); // prints: 3

// .reduce
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
})
console.log(newSum);
/* prints: The value of accumulator:  1
           The value of currentValue:  3
           The value of accumulator:  4
           The value of currentValue:  5
           The value of accumulator:  9
           The value of currentValue:  7
           16
*/
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10) // the second value 10 act as a initial value of the accumulator .
console.log(newSum);
/* prints: The value of accumulator:  10
           The value of currentValue:  1
           The value of accumulator:  11
           The value of currentValue:  3
           The value of accumulator:  14
           The value of currentValue:  5
           The value of accumulator:  19
           The value of currentValue:  7
           26
*/
// for more aray and iterators visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

// Objects
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
}; //fasterShip is object,  Fuel type and color is key , Turbo fuel and silver is values .

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};
let crewCount = spaceship.numCrew ; // crewCount = 5
let planetArray = spaceship.flightPath ; // planetArray = ['Venus', 'Mars', 'Saturn']

//Bracket Notations
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship['Active Mission'];
console.log(isActive); // prints: true


let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};
spaceship.color = 'glorious gold'; // changes the value of color in spaceship
spaceship.numEngines = 4; // this property is not there in spaceship so it will add this property to spaceship with value = 4.
delete spaceship['Secret Mission'];// it will delete the 'secret mission' property from the spaceship .

// Methods .
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
alienShip.retreat();//prints:We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
alienShip.takeOff();// prints: Spim... Borp... Glix... Blastoff!

// Nested Objects
let spaceship = {
  passengers: [{name: 'Space Dog'}], 
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
console.log(capFave);// prints: cookies
spaceship.passengers = [{Gyan: 'Boss'}];// we have changed the value of passengers .
let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);// prints: {Gyan: 'Boss'}

//
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}
let remotelyDisable = obj => {
  obj.disabled = true
}
greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
// prints: { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }.


// for...in
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
};
/*prints: captain: Lily
          chief officer: Dan
          medic: Clementine
          translator: Shauna
*/
for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name} : ${spaceship.crew[crewMember].degree}`)
};
/* prints: Lily : Computer Engineering
           Dan : Aerospace Engineering
           Clementine : Physics
           Shauna : Conservation Science
*/
// adavanced objects
// .this
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo()); //prints: I am 1E78V2 and my current energy level is 100.
// ....
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
goat.diet(); // Prints undefined
// The key takeaway from the example above is to avoid using arrow functions when using this in a method!

const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 'high';
robot.recharge(); //prints: Recharged! Energy is currently at high30%.

// Getter (get)
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    }
    else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};
console.log(robot.energyLevel); //prints: My current energy level is 100 .

// Setter (set)
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }
    else{
      return 'Pass in a number that is greater than or equal to 0'
    }
  }  
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors); //prints: 100 

// Factory Functions .
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep () {
      console.log('Beep Boop')
    }
  }; 
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();  //prints: Beep Boop .

function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)//prints: P-501
console.log(newRobot.mobile)//prints: false

//Destructured Assignment 
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality} = robot;
functionality.beep();//prints: Beep Boop.
const {energyLevel} = robot;
console.log(energyLevel);//prints: 100 .

//....
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
const robotKeys = Object.keys(robot);
console.log(robotKeys);//prints:[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

const robotEntries = Object.entries(robot);
console.log(robotEntries);
/*prints:[ [ 'model', 'SAL-1000' ],
           [ 'mobile', true ],
           [ 'sentient', false ],
           [ 'armor', 'Steel-plated' ],
           [ 'energyLevel', 75 ]
         ]
*/
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);
/*prints: { laserBlaster: true,
            voiceRecognition: true,
            model: 'SAL-1000',
            mobile: true,
            sentient: false,
            armor: 'Steel-plated',
            energyLevel: 75 
          }
*/
//for other such Built-in object method follow the link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor  





  





