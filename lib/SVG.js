class SVG {
  constructor() {
   this.text = '';
   this.shape = '';
  }
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

module.exports = SVG;
