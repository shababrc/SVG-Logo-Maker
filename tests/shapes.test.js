const { Triangle, Square, Circle } = require('../lib/shape');


describe("Triangle", function () {
    test("Should render SVG for a blue triangle element", function () {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

    })
});

describe("Square", function () {
    test("Should render SVG for a red square element", function () {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x = "75" y="45" width="150" height="150" style="fill:red" />');

    })
});

describe("Circle", function () {
    test("Should render SVG for a green circle element", function () {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="green" />`);

    })
});

