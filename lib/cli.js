const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Triangle, Circle, Square } = require('./shape');
const SVG = require('./SVG');  
const { writeFileSync } = require('fs');
class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Please enter your logo name.',
        },

        {
          type: 'input',
          name: 'textcolor',
          message: "Please enter the color of the text you would like."
        },

        {
          type: 'list',
          name: 'shapetype',
          choices: ['circle', 'triangle', 'square'],
          message: "Please choose a shape."
        },

        {
          type: 'input',
          name: 'shapecolor',
          message: "Please enter the color of the shape."
        },

      ])
      .then(({ name, textcolor, shapetype, shapecolor }) => {
      let shape;
        switch (shapetype) {
          case 'circle': 
            shape = new Circle();
            shape.setColor(shapecolor);
            break;
            
          case 'square': 
            shape = new Square();
            shape.setColor(shapecolor);
            break;

          default:
            shape = new Triangle();
            shape.setColor(shapecolor);
            break;
        }
       const svg = new SVG();
       svg.setText(name, textcolor);
       svg.setShape(shape);
       return writeFileSync('logo.svg', svg.render());

      })
      
      .then(() => console.log('Created SVG'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  
}

module.exports = CLI;
