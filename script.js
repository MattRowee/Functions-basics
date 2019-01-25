
// for (let currentNumber = 1; currentNumber <= 100; currentNumber++){
//     if(currentNumber % 5 === 0 && currentNumber % 7 === 0) {
//         console.log("ChickenMonkey")
//     }else if(currentNumber % 7 === 0) {
//         console.log("Monkey")
//     }else if(currentNumber % 5 === 0) {
//         console.log("Chicken")
//     }else if (currentNumber % 1 === 0) {
//         console.log(currentNumber)
//     } 
// } 
      
//     let bandNumber = 1
    
//     const takeNumber = function (bandName) {
//         const bandSentence = `${bandNumber}. ${bandName}`;
//         bandNumber++;
//         return bandSentence;

// }
//     const scum = takeNumber("Galactic Scum")
//     console.log(scum)  // This should print "1. Galactic Scum" in the console
    
//     const under = takeNumber("Underdogs")
//     console.log(under)  // This should print "2. Underdogs" in the console

//     const god = takeNumber("God,Dude") 
//     console.log(god)

//     const shred = takeNumber("Shred Lord")
//     console.log(shred)

//     const meteo = takeNumber("Meteo")
//     console.log(meteo)



//     const bugSquasher = function (bug, squasher) {
//         console.log(`The ${bug} was squashed by a ${squasher}`)
//     };

//     bugSquasher("beetle", "boot");
//     console.log(bugSquasher)
    // const bugSquasher = function (bug, squasher) {
    //     return `The ${bug} was squashed by a ${squasher}`
    // }
    // That function will return the exact same value, given the same inputs every time.
    
    // bugSquasher("Beetle", "Boot")
    // > The Beetle was squashed by the Boot
    
    // bugSquasher("Beetle", "Boot")
    // > The Beetle was squashed by the Boot // Yep, same output
    
    // bugSquasher("Spider", "thing next to my hand when I saw it")
    // > The Spider was squashed by the thing next to my hand when I saw it

    // const hamburger = {
    //     name: 'Hamburger',
    //     type: 'beef',
    //     cooked: false,
    // }
    // const zucchini = {
    //     name: 'Zucchini',
    //     type: 'vegetable',
    //     cooked: false,
    // }
    // const chickenBreast = {
    //     name: 'Chicken Breast',
    //     type: 'chicken',
    //     cooked: false,
    // }
    // const corn = {
    //     name: 'Corn',
    //     type: 'vegetable',
    //     cooked: false,
    // }
    // const steak = {
    //     name: 'Steak',
    //     type: 'beef',
    //     cooked: false,
    // }

    // const foods = [hamburger, zucchini, chickenBreast, corn, steak];

    // const cookedFood = [];
    
    // function grill (currentObject) {
    //    for(let i=0; i<foods.length; i++){
    //        if(foods[i].cooked === false){
    //     currentObject[i].cooked = true;
    //     cookedFood.push(currentObject[i]);
    //        }
    //        console.log(cookedFood[i]);     
    //    }
    // }
    
    // grill(foods);
   
    // The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

    // Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.
    
    // If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.
    
    // let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
    
    // function addExcitement (theWordArray) {
    //     let buildMeUp = ""
    
    //     for (let i = 0; i < theWordArray.length; i++) {
            /*
                If the current value of `i` divided by 3 has no
                remainder, add an exclamation point to the end of
                the word and then concatenate it to `buildMeUp`.
    
                Otherwise, just concatenate the word itself.
             */
    
    
            // Print buildMeUp to the console
        

    
    

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let buildMeUp = ""
let mark ="?"
function addExcitement (theWordArray, mark){ 
    for(let i = 0; i < theWordArray.length; i++){
        // buildMeUp = `${buildMeUp} ${theWordArray[i]} ${mark}` 
        // console.log(buildMeUp)     
        if(i!=0 && i%3 ===0){
        buildMeUp=`${buildMeUp} ${theWordArray[i]}${mark}`
        console.log(buildMeUp)
    } else {
        (buildMeUp=`${buildMeUp} ${theWordArray[i]}`)
        console.log(buildMeUp)
}}
}
addExcitement(sentence,"")
const theWordArray = [];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         // Concatenate the new word onto buildMeUp

//         // Print buildMeUp to the console
//     }

// }

// // Invoke the function and pass in the array
// addExcitement(sentence)