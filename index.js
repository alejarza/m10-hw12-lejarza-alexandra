// YOUR CODE HERE
//Create a class Car
class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }
    
    honk() {
        console.log('BEEP BEEP!')
    }
    performMaintenance() {
        //Log to the console after 3 seconds
        var timerId = setTimeout(function() {
        console.log('maintenance complete')
        }, 3000)
        
    }
}

//Create variable 
var mySweetRide = new Car('pontiac','fiero',1988)

mySweetRide.honk()
mySweetRide.performMaintenance()
