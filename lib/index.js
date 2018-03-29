/* eslint-disable import/first */

import './polyfills';
import './styles';
import ReactDOM from 'react-dom';
import renderStyleguide from './utils/renderStyleguide';

// Examples code revision to rerender only code examples (not the whole page) when code changes
var codeRevision = 0;

var render = function render() {
	// eslint-disable-next-line import/no-unresolved
	var styleguide = require('!!../loaders/styleguide-loader!./index.js');
	ReactDOM.render(renderStyleguide(styleguide, codeRevision), document.getElementById('app'));
};

window.addEventListener('hashchange', render);

/* istanbul ignore if */
if (module.hot) {
	module.hot.accept('!!../loaders/styleguide-loader!./index.js', function () {
		codeRevision += 1;
		render();
	});
}

render();