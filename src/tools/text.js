import Style from '../style';
import $ from 'jquery';

export default class Text{
	constructor(){
		this._tool = new paper.Tool();
		this._tool.onMouseDown = (event) => this.onMouseDown(event);
		this._tool.onMouseUp = (event) => this.onMouseUp(event);
	
		this._text = null;
		this._style = new Style();
	}

	onMouseDown(event) {
		this._text = new paper.PointText(event.point);
		this._text.fontFamily = this._style.fontFamily;
		this._text.fontWeight = this._style.fontWeight;
		this._text.fontSize = this._style.fontSize;
		this._text.justification = this._style.justification;
		this._text.fillColor = Style.frontColor;
		this._text.shadowBlur = this._style.shadowBlur;
		this._text.shadowOffset = this._style.shadowOffset;
		this._text.visible = this._style.visible;
		this._text.blendMode = this._style.blendMode;
		this._text.opacity = this._style.opacity;


		var input = $('<input id="fakeTextInput" class="fakeTextInput"></input>');

		input.css({
			position : 'absolute',
			top: 80,
			left: 100,
			zIndex : 10,
		});
		

		$('body').append(input);
		var fakeTextInput = $('#fakeTextInput');
		fakeTextInput.focus();
		fakeTextInput.val(this._text.content);

		fakeTextInput.keyup((event) => {
			this._text.content = fakeTextInput.val();
			if(event.keyCode === 13) {
				// finalizeInput(textItem);
				$(event.currentTarget).remove();
			}
			paper.project.view.update();
		});
	}

	onMouseUp(event){

	}

	get tool () {return this._tool};

	get color () {return this._color};
	set color (color) {this._color = color};
}