import $ from 'jquery';

export default class Menu{
	constructor(jObject){
		this._jObject = jObject;

		$('#imageUpload').change((event) => this.uploadImage(event));
		$('#myCanvas').on('dragover', (event) => this.handleDragOver(event));
		$('#myCanvas').on('drop', (event) => this.handleDrop(event));
		$('#exportImage').on('click', (event) => this.exportImage(event));
	}

	uploadImage(event){
		let images = event.target.files; // FileList object

    	for (let f of images) {
 			let reader = new FileReader();
			reader.onload = (event) => {
		     	var raster = new paper.Raster({
					source: event.target.result,
					position: paper.view.center
				});
		    }
		    // Read in the image file as a data URL.
		    reader.readAsDataURL(f);
    	}
	}

	handleDragOver(event){
		event.stopPropagation();
    	event.preventDefault();
   		event.originalEvent.dataTransfer.dropEffect = 'copy';
	}

	handleDrop(event){
		event.stopPropagation();
    	event.preventDefault();
    	let images = event.originalEvent.dataTransfer.files; // FileList object

    	for (let f of images) {
 			let reader = new FileReader();
			reader.onload = (event) => {
		     	var raster = new paper.Raster({
					source: event.target.result,
					position: paper.view.center
				});
		    }
		    // Read in the image file as a data URL.
		    reader.readAsDataURL(f);
    	}
	}

	exportImage(event){
		var tempImg = paper.project.layers[0].rasterize();
		var data = tempImg.toDataURL();
		tempImg.remove();
		$('#myCanvas')[0].toBlob(function(blob) {
			saveAs(blob, 'export.png');
		});
	}
}