/**
 * 
 * 2.5 - Function Parameters and Return
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * The line below forces JavaScript to follow certian rules. Leave it there.
 * For more info: www.w3schools.com/js/js_strict.asp
**/ 

'use strict';

// Part 1

function to_fahrenheit(celsius) {

    let Fahrenheit = (celsius * 9/5) + 32;

    return Fahrenheit;

}

// Part 2

function to_celsius(fahrenheit) {

    let Celcius = (fahrenheit - 32) * 5/9;

    return Celcius;

}

// Part 3

function roll_dice(Num, Sides) {

    for (Num=Num; Num > 0; Num--) {

    let Value = Math.floor(Math.random() * Sides + 1);

    console.log(`You rolled ` + Value);
    
    }
        
}

// Part 4

function area_circle(Radius) {

return Math.PI * Radius * 2;

}

// Part 5

function area_cylinder(Radius, Height) {

    return Math.PI * Radius ** 2 * Height;
    
    }

// Part 6

function pythagorean_theorem(a, b) {

return Math.sqrt(a**2 + b**2);

}

function percent(Score, Total) {

return Math.round(Score / Total * 100) + `%`;

}

function round(value, decimals) {

return Math.round(value * (10 ** decimals)) / 10 ** decimals;

}