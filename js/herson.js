var socket = io();
// Printing data to the console
socket.on('message', function(data) {
  console.log(data);
});

var polyEl = document.querySelector('.svg-attributes-demo polygon');
	var feTurbulenceEl = document.querySelector('feTurbulence');
	var feDisplacementMap = document.querySelector('feDisplacementMap');
	let enterString = "enter the void.";
	let notAloneString = "don't go alone."
	let enterArray = Array.from(enterString);
	let aloneArray = Array.from(notAloneString);

	polyEl.setAttribute('points', '64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100');
	feTurbulenceEl.setAttribute('baseFrequency', '.05');
	feDisplacementMap.setAttribute('scale', '15');

	var animateVoid = anime({
		targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
		points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
		baseFrequency: 0,
		scale: 1,
		direction: 'normal',
		easing: 'easeInOutExpo',
		autoplay: false
	});

	var animateFooter = anime({
		targets: '.box #enterFooterCursor',
		translateX: 175,
  		direction: 'normal',
  		easing: 'steps(14)',
		autoplay: false,
		begin:function(){
			aloneArray.forEach((letter, i) => {
			setTimeout(() => {
				displayFooter(letter);
			}, i * 75);
		});
		}
	});

	var animateHeader = anime({
		targets: '.header #enterHeaderCursor',
		translateX: 175,
  		direction: 'normal',
  		easing: 'steps(14)',
		autoplay: false,
		begin:function(){
			enterArray.forEach((letter, i) => {
			setTimeout(() => {
				displayHeader(letter);
			}, i * 75);
		});
		}
	});

	anime({
		targets: '#enterFooterCursor',
		opacity: 0,
		duration: 300,
		loop: true,
		easing: 'linear',
		direction: 'alternate'
	});

    anime({
		targets: '#enterHeaderCursor',
		opacity: 0,
		duration: 300,
		loop: true,
		easing: 'linear',
		direction: 'alternate'
	});

    // Marisa's animation 
	anime({
		targets: '#grid',
		scale: [
		  {value: .2, easing: 'easeOutSine', duration: 1200},
		  {value: 1, easing: 'easeInOutQuad', duration: 1900}
		],
		delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
	  });

	function displayFooter(letter) {
		var node = document.createElement("span");
		var textNode = document.createTextNode(letter);
		node.appendChild(textNode);
		document.querySelector('#enterFooterText').appendChild(node);	
	}

    function displayHeader(letter) {
		var node = document.createElement("span");
		var textNode = document.createTextNode(letter);
		node.appendChild(textNode);
		document.querySelector('#enterHeaderText').appendChild(node);	
	}

	document.querySelector('.triggerFooter').onclick = animateFooter.play;
	document.querySelector('.triggerVoid').onclick = animateVoid.play;
	// document.querySelector('.triggerTerminal2').onclick = animateTerminal2.play;
	document.querySelector('.triggerHeader').onclick = animateHeader.play;
