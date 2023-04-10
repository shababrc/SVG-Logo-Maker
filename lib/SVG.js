const Component = require('./shape.js');
class SVG {
  constructor() {
   this.text = 'abc';
   this.shape = 'circle'
  }
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.shape}
    ${this.text}
  </svg>`;
  }
   setText(text, textcolor){
    this.text =  `<text x="40" y="35" fill="${textcolor}">${text}</text>`
  }
   setShape(shape){
    this.shape = shape.render();
   }

}

module.exports = SVG;
