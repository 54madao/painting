import "babel-polyfill";
import $ from 'jquery';
// require('paper/dist/paper-full');

class Paint{

	constructor(canvas){

		paper.setup(canvas[0]);
		// var path = new paper.Path();
		// path.strokeColor = 'black';
		// var start = new paper.Point(100, 100);
		// path.moveTo(start);
		// path.lineTo(start.add([ 200, -50 ]));
		// paper.view.draw();
	}

}

new Paint($("#myCanvas"));
