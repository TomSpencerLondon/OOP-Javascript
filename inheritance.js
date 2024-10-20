class Shape {
    constructor(color) {
        this.color = color;
    }
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    move() {
        console.log('move circle');
    }
    draw() {
        console.log('draw');
    }
}

const c = new Circle('red', 1);