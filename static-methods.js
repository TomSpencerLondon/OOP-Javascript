class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    draw() {

    }

    // static method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        new Circle(radius);

        return new Circle(radius);
    }
}

const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);

class Math2 {
    static abs(value) {

    }
}

Math2.abs(1);