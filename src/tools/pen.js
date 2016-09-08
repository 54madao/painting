export default class Pen{
	constructor(){
		this._tool = new paper.Tool();

		this._tool.onMouseDown = (event) => this.onMouseDown(event);

		this._tool.onMouseDrag = (event) => {
			this._path.add(event.point);
		}

		this._path = null;
		this._color = 'black';
	}

	onMouseDown(event) {
		this._path = new paper.Path();
		this._path.strokeColor = this._color;
		this._path.add(event.point);
	}

	get tool () {return this._tool};

	get color () {return this._color};
	set color (color) {this._color = color};
}