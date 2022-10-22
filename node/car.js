const car = require("./mycar");

console.log(car.turn(300));
console.log(car.drive(200));

class Duck {
    flying = false;
    quaking = false;
    xPos = 0;
    yPos = 0;

    takeOff() {
        this.flying = true;
    }

    land() {
        this.flying = false;
    }

    startQuacking() {
        this.quacking = true;
    }

    stopQuacking() {
        this.quacking = false;
    }

    moveTo(x, y) {
        this.xPos = x;
        this.yPos = y;
        let moving = this.flying?"Flying":"Swimming";
        let quacking = this.quacking?"While Quacking":"";
        console.log(`Duck is ${moving} to ${x},${y} ${quacking}`);
    }

}

let duck = new Duck();
duck.startQuacking();
duck.takeOff();
duck.moveTo(20,40);
