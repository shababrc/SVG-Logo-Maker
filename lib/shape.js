//Creating a class for our shape and shape 
//constructor that sets the color of shapee
class Shape {
  constructor(color) {
    this.color = color;
  }

  setColor(color) {
    this.color = color;
  }

}

//class triangle, square, and circle that inherits from it's parent class shape, renders the shape based on it's properties and name.
//and uses it's color property to fill in the color.
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
}

class Square extends Shape {
  render() {
    return `<rect x = "75" y="45" width="150" height="150" style="fill:${this.color}" />`
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`
  }
}

//Exporting our Triangle, Square, and Circle to be used
//in other files
module.exports = { Triangle, Square, Circle };
