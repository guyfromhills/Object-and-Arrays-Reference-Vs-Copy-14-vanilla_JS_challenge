


// start with strings, numbers and booleans

// let number = 100;
// let number2 = number;

// console.log(number, number2);

// number =200; 
// console.log(number, number2);

// let name = "anubhav";
// let name2 = name;

// console.log(name2, name);

// name = "anubhav negi";
// console.log(name2, name);



    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;

    console.log(players, team);

    // You might think we can just do something like this:
    // team[3] = "roshan";
    console.log(team);
    console.log(players);



    // however what happens when we update that array?

    // now here is the problem!

    // oh no - we have edited the original array too!

    // Why? It's because that is an array reference, not an array copy. They both point to the same array!

    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    team2[2]= " roshan lal"; //copy of players not a reference



    // one way

    // or create a new array and concat the old one in

    // or use the new ES6 Spread
    const team3 = [...players];
    team3[3] = "hero";
    
    const team4 = Array.from(players);
    team4[3] = "rajan";
    

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy:
    const captain = person;
    captain.age = 99;

    // how do we take a copy instead?
    const cap2 = Object.assign( {}, person,{age:12, number:43});
    console.log(cap2);

    // We will hopefully soon see the object ...spread

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.


    const anubhav = {
        sport : "football",
        movie : "batman",
        social :
        {
            twitter : "@guyfromhills",
            instagram : "@guyfromhills"
        }
    };

    const dev = Object.assign({}, anubhav);