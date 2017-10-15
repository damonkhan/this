// function calculateAge(year) {
//     console.log(2017-year);
//     console.log(this);
// }
//
// calculateAge(1992);

// var damon = {
//     // properties
//     name: 'damon',
//     age: 25,
//     occupation: 'programmer',
//     married: true,
//
//     // methods
//     calculateBirthYear: function () {
//         console.log(2017 - this.age);
//     }
// };
//
// damon.calculateBirthYear();
//
// var dog = {
//     // properties
//     name: "",
//     age: 0,
//     breed: "",
//     color: "",
//
//     // methods
//     bark: function () {
//         console.log('Woof!');
//     },
//     sit: function () {
//       console.log(this.name + " sits");
//     },
//     rollOver: function () {
//         console.log(this.name + ' rolls over');
//     }
// };
//
// dog.name = 'Kuri';
// dog.age = 5;
// dog.breed = 'Staffy X';
// dog.color = 'grey';
//
// dog.bark();
// dog.sit();
// dog.rollOver();



/*
* Creates a dog object
* @name, name of the dog
* @age, age of the dog
* @breed, breed of the dog
* @color, color of the dog
* @return, returns a dog obj with specified properties
 */
function breedDog(name, age, breed, color) {
    var dog = {
        name: name,
        age: age,
        breed: breed,
        color: color,

        bark: function () {
            console.log("Woof!");
        },
        sit: function () {
            console.log(this.name + " sits down");
        },
        roll: function () {
            console.log(this.name + " rolls over");
        },
        printProperties: function () {
            console.log(this);
        }
    };

    return dog;
}

var kuri = breedDog('Kuri', 5, 'Staffy X', 'grey');
kuri.bark();
kuri.sit();
kuri.roll();
kuri.printProperties();

var roddy = breedDog('Roddy', 1, 'Rottweiler', 'black');
roddy.bark();
roddy.sit();
roddy.roll();
roddy.printProperties();





