# SVG Logo Maker

## Description
We have implemented using Node.js a command-line application that takes in user input to generate a logo and save it as an SVG file Links to an external site. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.


## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## How we accomplished this

## By:

### in Javascript:
    Importing our requirements like inquirer, path, and fspromises
    requiring the shape class to get the triangle, circle, and square
    requiring SVG class.
    Creating a const to write to our file.
    Creating our command line input class that has a constructor
    and runs our inquirer.
    running inquirer to ask user for input, asks user to input name of logo they would like, color of logo text, to choose a shape from the list, and then asking what color the shape will be.
    Then we return a promise for the shape based on user choices
    And create switch cases that will default to user choices on shape type. 
    Creating a new SVG object, from the user input in cli
    it will be set to all the user's choices and return it to our logo.svg file and render it as SVG logo.
    We are console logging that logo was created, otherwise 
    if error, console log that something went wrong.
    Then export the module as CLI.
    Creating an SVG class that has a constructor, that sets text
    to blank and shape to blank.
    Creating a render method that will return us a 300x200 window with our svg logo based on the fields inputted from the user setting shape, text, textcolor based on those fields rendering a shape with text inside of it.
    Exporting our module to use in other classes
    as SVG.
    Creating a class for our shape and shape with a constructor that sets the color of shape.
    Creating classes triangle, square, and circle that inherit from it's parent class shape, renders the shape based on it's properties and name, and uses it's color property to fill in the color.
    Exporting our Triangle, Square, and Circle to be used
    in other files.
    We create a test file that creates a shape requiring importing our shape constants from the shape library.
    We include: a test cases for a blue triangle, red square, and green circle, rendering these shapes and setting color and expecting them to match our shape dimensions and color.
    In our index.js we are creating a CLI constant that gets our 
    proper app requirement from our library.
    Then creating a new command line input object
    Then calling run to start the program.

## Link to Github Repo
https://github.com/shababrc/SVG-Logo-Maker 

## Credits
Credits to the rest of the bootcamp class for help/advice on this assignment. Credit to Bryan and Shawn from the teaching staff. Major credits to tutors Irina Kudosova, and Jaytee Padilla for their guidance
and expertise on this assignment.

## License
MIT