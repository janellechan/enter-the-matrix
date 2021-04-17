
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

	var animateTerminal = anime({
		targets: '.box #block',
		translateX: 175,
  		direction: 'normal',
  		easing: 'steps(14)',
		autoplay: false,
		begin:function(){
			enterArray.forEach((letter, i) => {
			setTimeout(() => {
				display(letter);
			}, i * 75);
		});
		}
	});

	var animateTerminal2 = anime({
		targets: '.box #block',
		translateX: 175,
  		direction: 'normal',
  		easing: 'steps(14)',
		autoplay: false,
		begin:function(){
			aloneArray.forEach((letter, i) => {
			setTimeout(() => {
				display(letter);
			}, i * 75);
		});
		}
	});

	anime({
		targets: '.box #block',
		opacity: 0,
		duration: 300,
		loop: true,
		easing: 'linear',
		direction: 'alternate'
	});

	function display(letter) {
		var node = document.createElement("span");
		var textNode = document.createTextNode(letter);
		node.appendChild(textNode);
		document.querySelector('#enterSpan').appendChild(node);	
	}

	document.querySelector('.triggerTerminal').onclick = animateTerminal.play;
	document.querySelector('.triggerVoid').onclick = animateVoid.play;
	document.querySelector('.triggerTerminal2').onclick = animateTerminal2.play;