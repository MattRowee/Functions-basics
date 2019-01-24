
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
    //  solved this without first resorting to a fizzbuzz google search. felt very satisfied
    


    // A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

    // Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.
    
    let bandNumber = 1
    
    const takeNumber = function (bandName) {
        const bandSentence = `${bandNumber}. ${bandName}`;
        bandNumber++;
        return bandSentence;

}
    const scum = takeNumber("Galactic Scum")
    console.log(scum)  // This should print "1. Galactic Scum" in the console
    
    const under = takeNumber("Underdogs")
    console.log(under)  // This should print "2. Underdogs" in the console

    const god = takeNumber("God,Dude") 
    console.log(god)

    const shred = takeNumber("Shred Lord")
    console.log(shred)

    const meteo = takeNumber("Meteo")
    console.log(meteo)



    const bugSquasher = function (bug, squasher) {
        console.log(`The ${bug} was squashed by a ${squasher}`)
    };

    bugSquasher("beetle", "boot");
    console.log(bugSquasher)
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

    const hamburger = {
        name: 'Hamburger',
        type: 'beef',
        cooked: false,
    }
    const zucchini = {
        name: 'Zucchini',
        type: 'vegetable',
        cooked: false,
    }
    const chickenBreast = {
        name: 'Chicken Breast',
        type: 'chicken',
        cooked: false,
    }
    const corn = {
        name: 'Corn',
        type: 'vegetable',
        cooked: false,
    }
    const steak = {
        name: 'Steak',
        type: 'beef',
        cooked: false,
    }
    
    const foods = [hamburger, zucchini, chickenBreast, corn, steak];

    const cookedFood = [];
    // This exercise does not require you to alter this function. But read it. See if you can follow what it takes in, executes, and returns.
    
    
    function grill (currentObject) {
       for(let i=0; i<foods.length; i++){
           if(foods[i].cooked === false){
        currentObject[i].cooked = true;
        cookedFood.push(currentObject[i]);
           }
           console.log(cookedFood[i]);
        
        
       }
    }
    
    grill(foods);
   
 
    // Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.