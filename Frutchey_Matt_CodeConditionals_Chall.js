/* MVP
As a diligent student, I want to reward myself if I finish my homework, and based on the time of day:

I want a latte if it's before 10 am
I want a hot chocolate it's between 10 am and 4 pm
I want ice cream between 4 pm - 10 pm.
If it's after 10 pm, I don't want anything other than sleep!


Feature 1
Building off the MVP, if I'm up for ice cream, I want strawberry - but only if it's Wednesday. Otherwise, I want vanilla.

Feature 2 (hard) - Optional
Building off Feature 1, I want to adjust the current conditions and add a new option so that if the time is between 3 pm - 6 pm, 
I want to have it pick either ice cream or hot chocolate depending on if the time is even or odd.
*/

let time = 16 // 24-hour clock here
let day = "Wednesday" // variable to implement the first feature
let randomDessert = ["Ice Cream", "Cookies", "Candy"]
let randomSweets = ["Hot Chocolate", "Tea", "Cake"]


function timedReward(){
    if (time < 10){
        return "Latte"
    }
    if (time >= 10 && time < 15){
        return "Hot Chocolate"
    }
    if (time >= 15 && time <= 18){
        if (time % 2 == 0 && day == "Wednesday"){
            return "Strawberry Ice Cream"
        }
        if (time % 2 == 0 && day != "Wednesday"){
            return "Vanilla Ice Cream"
        }
        else {
            return "Hot Chocolate"
        }
    }
    if (time >= 19 && time <= 22){
        if (day == "Wednesday"){
            return "Strawberry Ice Cream"
        } 
        else {
            return "Vanilla Ice Cream"
        }
    } 
    else {
        return "Sleep"
    }
}

console.log(timedReward())