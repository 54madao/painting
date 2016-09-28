'use strict'
// import '../node_modules/paper/dist/paper-full.js';
// import paper from '../node_modules/paper/dist/paper-full.js';
// import 'paper';
import Paint from './paint';

new Paint({
	'canvas': $("#paintingCanvas"),
	'toolbar': $('#paintingToolbar'),
	'menu': $('#paintingMenu')
});
