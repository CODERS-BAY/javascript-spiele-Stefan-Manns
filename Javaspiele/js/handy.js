let fallingSpeed    //Werte zuwerten
let speed
let angle
let distanceToMonster = Math.round(Math.random() * 90 + 10);
let throwingDistance

function calculateThrowingDistance(fallingSpeed, angle, speed) {
    throwingDistance = ((speed * speed) * Math.sin(2 * angle)) / fallingSpeed;
    console.log('Throwing Distance: ');
    console.log(Math.round(throwingDistance) + 'm');
    console.log('Distance To Monster: ');
    console.log(Math.round(distanceToMonster) + 'm');
    console.log('Missed Monster about: ');
    console.log(Math.abs(Math.round(throwingDistance - distanceToMonster)) + 'm');
    return Math.round(throwingDistance);
    
}



function hit() {
    if (calculateThrowingDistance(fallingSpeed, angle, speed) == distanceToMonster) {
        return true;
    }
    return false;
}

function alarmPressed() {
    let planets = document.getElementsByName('Planet');
    console.log(planets);
    for (let index = 0; index < planets.length; index++) {
        if (planets[index].checked) {
            fallingSpeed=planets[index].value;
            break;
        }
    }
    speed = document.getElementById('speed').value;
    console.log(speed);
    angle = document.getElementById('angle').value * ( Math.PI / 180 );
    console.log(angle);

    if (hit()) {
        alert('Mission accomplished!')
    }
    else {
        alert('New dumbass! Missed Monster about: ' + (Math.round(throwingDistance - distanceToMonster)) + 'm')
    }
}

