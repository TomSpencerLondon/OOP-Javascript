class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        super.move();
        console.log('move circle');
    }
}

const c = new Circle();