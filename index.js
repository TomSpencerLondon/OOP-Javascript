function Circle(radius) {
    // instance members
    this.radius = radius;

    this.move = function() {
        console.log('move');
    }
}

// Prototype members
Circle.prototype.draw = function() {
    console.log('draw')
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function() {
    return 'Circle with radius ' + this.radius;
}

console.log(Object.keys(c1));
for (let key in c1) console.log(key);
//
// function StopWatch() {
//     let startTime, endTime, running, duration = 0;
//
//     this.start = function() {
//         if (running)
//             throw new Error('Stopwatch has already started.');
//         running = true;
//
//         startTime = new Date();
//     };
//
//     this.stop = function() {
//         if (!running)
//             throw new Error('Stopwatch is not started.');
//
//         running = false;
//         endTime = new Date();
//         const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
//
//         duration += seconds;
//     };
//
//     this.reset = function() {
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = 0;
//     };
//
//     Object.defineProperty(this, 'duration', {
//         get: function() { return duration; }
//     })
//
//     Object.defineProperty(this, 'startTime', {
//         get: function() { return startTime; }
//     })
// }

function StopWatch() {
    // Initialization of instance properties
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;

    // Getter for duration using Object.defineProperty
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        },
        set: function(value) {
            duration = value;
        }
    });

// Getter for startTime using Object.defineProperty
    Object.defineProperty(this, 'startTime', {
        get: function() {
            return startTime;
        }
    });
}

// Start method on the prototype
StopWatch.prototype.start = function() {
    if (this.running)
        throw new Error('Stopwatch has already started.');

    this.running = true;
    this.startTime = new Date();
};

// Stop method on the prototype
StopWatch.prototype.stop = function() {
    if (!this.running)
        throw new Error('Stopwatch is not started.');

    this.running = false;
    this.endTime = new Date();
    const seconds = (this.endTime - this.startTime) / 1000;

    this.duration += seconds;
};

// Reset method on the prototype
StopWatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
};


const stopwatch = new StopWatch();


let person = { name: 'Mosh' };
console.log(person);

for (let key in person)
    console.log(key);

console.log(Object.keys(person));

let objectBase = Object.getPrototypeOf(person);

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

console.log(descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
})

person.name = 'John'

delete person.name
console.log(person);

console.log(Object.keys(person));