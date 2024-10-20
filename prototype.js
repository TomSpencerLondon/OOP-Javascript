function extend(Child, Parent) {

// Circle.prototype.constructor = Circle;
// new Circle.prototype.constructor() => new Circle();
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

}
function Shape() {
}
Shape.prototype.duplicate = function() {
    console.log('duplicate');
}
function Circle() {
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this);
    console.log('duplicate circle');
}


function Square() {
}

extend(Square, Shape);

Square.prototype.duplicate = function() {
    console.log('duplicate square');
}


const shapes = [
    new Circle(),
    new Square()
];

for(let shape of shapes) {
    shape.duplicate();
    console.log("......")
}







