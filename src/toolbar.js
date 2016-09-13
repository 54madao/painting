import $ from 'jquery';
import Pen from './tools/pen';
import Shape from './tools/Shape';
import Text from './tools/Text';
import Select from './tools/Select';

export default class ToolBar{

	constructor(jObject){
		this._jObject = jObject;
		this._selected = null;

		//set toolbar
		this._tools = new Map();
		// this._tools.set('Pen', new Pen());
		// this._tools.set('Geo', new Pen('red'));
		this._jObject.children('a').each((index, element) => {
			let name = $(element).attr('data-name');
			switch(name){
				case "Select":
					this._tools.set(name, new Select());
					break;
				case "Pen":
					this._tools.set(name, new Pen());
					break;
				case "Shape":
					this._tools.set(name, new Shape());
					break;
				case "Shape":
					this._tools.set(name, new Shape());
			}		
			$(element).on('click', (event) => this.select(event));
		})	

	}

	select(event){
		let name = $(event.currentTarget).attr('data-name');
		this._selected = this._tools.get(name);
		this._selected._tool.activate();
	}

	get tools () {return this._tools;}

}