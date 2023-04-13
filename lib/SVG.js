//SVG class that has a constructor, that sets text
//to blank and shape to blank
class SVG {
  constructor() {
   this.text = '';
   this.shape = '';
  }
  //render method that will return us a 300x200 window with our svg logo 
  //based on the fields inputted from the user
  //setting shape, text, textcolor based on those fields
  //rendering a shape with text inside of it 
  render() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.shape}
    ${this.text}
  </svg>`;
  }
   setText(text, textcolor){
    this.text =  `<text x="150" y="125" font-size="25px" text-anchor="middle" fill="${textcolor}">${text}</text>`
  }
   setShape(shape){
    this.shape = shape.render();
   }

}

//exporting our module to use in other classes
//as SVG
module.exports = SVG;
