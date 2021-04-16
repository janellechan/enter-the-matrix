# enter-the-matrix
This project uses `Node.js`, `matter-js`, `j.query`, `anime.js`, and `socket.io`. To get started, you’ll need [Node.js](https://nodejs.org/en/) on your computer. Then you'll be able to use npm (it comes with Node) to install modules and run the server. See the Install section for more details.

## Install
Clone this repo into your working directory.
The `package.json` and `package-lock.json` will allow you, after pulling the code, to run `npm install` to get the latest dependencies required for the project.

Whenever you or someone else wants to add new dependencies to the project, you can run `npm install --save` or `npm install --save-dev`. Then `package.json` is automatically updated, and needs to be committed again.

## Usage
To run the server locally for testing and development, you can run `node server.js` from the repo directory to start up the server. Don't forget to close it if you're not using it!

## Comments
Highly encourage adding comments to above your sections/lines of code if you feel that it is not self explanatory or can help others understand what it does and why its there. If there are things that still need to be added or fixed, you could also add a `TODO` comment with your name in parentheses to make a visual note to whoever is reading.
Example:
```
// TODO(janelle): Need to fix the dimensions of the canvas!
```

## Including dependencies in the HTML
Socket.io and Matter.js are included by adding the scripts to the web page:
  ```
  <script src="/socket.io/socket.io.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.17.0/matter.min.js"></script>
  ```

## .gitignore
This project includes a .gitignore file listing common files created by MacOS and Windows, and Node directories and files that should not be included with your commits. `node_modules` should be specific to your operating system and computer, and then we can use [shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap) to lock down the full dependency tree. StackOverflow has a good thread discussing the decision behind this [here](https://stackoverflow.com/questions/11459475/should-i-check-in-folder-node-modules-to-git-when-creating-a-node-js-app-on-he).

## Resources
Feel free to add to this list :)
- [Hackernoon, How to Build a Multiplayer Browser Game](https://hackernoon.com/how-to-build-a-multiplayer-browser-game-4a793818c29b)
  - Used this as a lose guide on how to set up Socket.io and get the server listening for data.
- [Matter.js GitHub repository](https://github.com/liabru/matter-js)
- [Anime.js, SVG attributes](https://animejs.com/documentation/#svgAttr)
