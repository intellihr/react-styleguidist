import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'rsg-components/Styled';

var styles = function styles(_ref) {
	var fontFamily = _ref.fontFamily,
	    fontSize = _ref.fontSize,
	    color = _ref.color;
	return {
		root: {
			margin: 0,
			lineHeight: 1.2,
			fontSize: fontSize.small,
			fontFamily: fontFamily.monospace,
			color: color.error,
			whiteSpace: 'pre'
		}
	};
};

export function PlaygroundErrorRenderer(_ref2) {
	var classes = _ref2.classes,
	    message = _ref2.message;

	return React.createElement(
		'pre',
		{ className: classes.root },
		message
	);
}

PlaygroundErrorRenderer.propTypes = {
	classes: PropTypes.object.isRequired,
	message: PropTypes.string.isRequired
};

export default Styled(styles)(PlaygroundErrorRenderer);