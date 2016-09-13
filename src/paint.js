import "babel-polyfill";
import $ from 'jquery';
// require('paper/dist/paper-full');
import ToolBar from './toolbar';

class Paint{

	constructor(canvas){

		paper.setup(canvas[0]);
		// var path = new paper.Path();
		// path.strokeColor = 'black';
		// var start = new paper.Point(100, 100);
		// path.moveTo(start);
		// path.lineTo(start.add([ 200, -50 ]));
		// paper.view.draw();
		// var tool = new paper.Tool();
		// var path;

		// // Define a mousedown and mousedrag handler
		// tool.onMouseDown = function(event) {
		// 	path = new paper.Path();
		// 	path.strokeColor = 'black';
		// 	path.add(event.point);
		// }

		// tool.onMouseDrag = function(event) {
		// 	path.add(event.point);
		// }
		this._toolbar = new ToolBar($('.toolsContainer'));
	}

}
new Paint($("#myCanvas"));