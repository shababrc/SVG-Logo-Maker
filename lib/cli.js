//importing our requirements like inquirer, path, and fspromises
//requiring the shape class to get the triangle, circle, and square
//requiring SVG class
//const to write to our file
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Triangle, Circle, Square } = require('./shape');
const SVG = require('./SVG');  
const { writeFileSync } = require('fs');
//our command line input class that has a constructor
//and runs our inquirer
class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  //running inquirer to ask user for input, asks user to input name of logo they would like
  //color of logo text, to choose a shape from the list, and then asking what color the 
  //shape will be
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
          message: "Please enter the name or hexadecimal code of the color of the text you would like."
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
          message: "Please enter the color or hexadecimal code you would like your shape color to be."
        },

      ]) 
      //then we return a promise for the shape based on user choices
      //switch cases that will default to user choices on shape type 
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
       //creating a new SVG object, from the user input in cli
       //it will be set to all the user's choices
       //and return it to our logo.svg file and render it as 
       //SVG logo
       const svg = new SVG();
       svg.setText(name, textcolor);
       svg.setShape(shape);
       return writeFileSync('logo.svg', svg.render());

      })
      //console logging that logo was created, otherwise 
      //if error console log that something went wrong.
      .then(() => console.log('Created SVG'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  
}

//exporting the module as CLI
module.exports = CLI;
