var socket = io();
// Have the server send data to the Console
socket.on('message', function (data) {
  console.log(data);
});

// Find the canvas element. Use to point renderer which canvas to fill.
var canvas = document.querySelector('canvas');

// Module aliases - More modules can be added if needed (https://brm.io/matter-js/docs/).
var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite,
  Composites = Matter.Composites,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

// Create an engine
var engine = Engine.create();

// Create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  canvas: canvas,
  options: {
    // width: 500,
    // height: 500,
    showAngleIndicator: true
  }
});

// Create "bodies" - boxes and a ground box. Setting the ground box `isStatic: true` will block other bodies
// going further down upon impact. (https://brm.io/matter-js/docs/classes/Bodies.html)
var boxA = Bodies.rectangle(400, 200, 80, 80); // (x, y, width, height)
var boxB = Bodies.rectangle(450, 50, 80, 80);
var boxC = Bodies.rectangle(450, 100, 80, 80);
var ground = Bodies.rectangle(300, 410, 610, 60, { isStatic: true });

var mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

// Add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, boxC, ground], mouseConstraint);

// Keep the mouse in sync with rendering
render.mouse = mouse;

// Run the renderer
Render.run(render);

// Create runner
var runner = Runner.create();

// Run the engine
Runner.run(runner, engine);

var canvasContainer = document.getElementById('content-container');
canvasContainer.appendChild(canvas);
canvasContainer.style.opacity ="1";
